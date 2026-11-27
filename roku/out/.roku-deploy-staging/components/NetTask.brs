sub init()
    m.top.functionName = "netMain"
end sub

' Connects to the CouchParty server. Prefers a WebSocket (one steady connection, like the phones);
' falls back to HTTP long-polling on Roku models or OS versions where roWebSocket isn't available.
sub netMain()
    m.port = CreateObject("roMessagePort")
    m.top.observeField("key", m.port)
    m.wsOpenedOnce = false
    m.wsFails = 0
    m.ws = invalid
    m.wsOpen = false
    m.tv = ""
    m.since = 0
    m.poll = invalid

    if openSocket() then
        m.mode = "ws"
    else
        startPollMode()
    end if

    while true
        msg = wait(5000, m.port)
        t = type(msg)
        if t = "roSGNodeEvent" then
            if msg.getField() = "key" then sendKey(msg.getData())
        else if t = "roWebSocketEvent" then
            onSocketEvent(msg)
        else if t = "roUrlEvent" then
            onPollEvent(msg)
        else if msg = invalid then
            onIdle()
        end if
    end while
end sub

' ---------- WebSocket ----------
function socketUrl() as string
    return m.top.base.Replace("https://", "wss://") + "/ws"
end function

function openSocket() as boolean
    try
        ' Newer Roku OS only; the name is in a variable because older tooling doesn't know it.
        kind = "roWebSocket"
        ws = CreateObject(kind)
        if ws = invalid then return false
        ws.SetMessagePort(m.port)
        ws.SetCertificatesFile("common:/certs/ca-bundle.crt")
        ws.InitClientCertificates()
        ws.SetUrl(socketUrl())
        ws.Open()
        m.ws = ws
        m.wsOpen = false
        m.wsStarted = CreateObject("roTimespan")
        m.top.status = "Connecting…"
        return true
    catch e
        print "roWebSocket unavailable: "; e.message
        m.ws = invalid
        return false
    end try
end function

sub onSocketEvent(msg as object)
    ev = msg.GetType()
    if ev = 1 then
        ' Open: say hello with the saved room code so the same QR keeps working.
        m.wsOpen = true
        m.wsOpenedOnce = true
        m.wsFails = 0
        m.top.status = ""
        room = m.top.room
        if room = invalid then room = ""
        m.ws.Send(FormatJson({ t: "tv:hello", room: room }))
    else if ev = 5 then
        info = msg.GetInfo()
        text = invalid
        if info <> invalid then text = info.Text
        if text = invalid then return
        data = ParseJson(text)
        if data = invalid or data.t = invalid then return
        if data.t = "ping" then
            m.ws.Send("{""t"":""pong""}")
            return
        end if
        m.top.batch = { msgs: [data] }
    else if ev = 2 then
        socketLost()
    end if
end sub

sub socketLost()
    m.wsOpen = false
    m.ws = invalid
    m.wsFails = m.wsFails + 1
    ' Never got a connection after a few tries: this Roku can't do secure WebSockets, so poll instead.
    if not m.wsOpenedOnce and m.wsFails >= 3 then
        startPollMode()
        return
    end if
    m.top.status = "Reconnecting…"
    sleep(2000)
    if not openSocket() then startPollMode()
end sub

' ---------- HTTP long-poll fallback ----------
sub startPollMode()
    m.mode = "poll"
    m.ws = invalid
    connect()
    startPoll()
end sub

sub onPollEvent(msg as object)
    if m.mode <> "poll" then return
    code = msg.GetResponseCode()
    if code = 200 then
        data = ParseJson(msg.GetString())
        if data <> invalid then
            if data.seq <> invalid then m.since = data.seq
            if data.msgs <> invalid and data.msgs.Count() > 0 then m.top.batch = { msgs: data.msgs }
        end if
        m.top.status = ""
    else if code = 404 then
        ' The server forgot this TV: join again with the same room code.
        connect()
    else
        m.top.status = "Reconnecting…"
        sleep(2000)
    end if
    startPoll()
end sub

sub onIdle()
    if m.mode = "ws" then
        ' Stuck opening for more than 10 s: count it as a failed attempt.
        if m.ws <> invalid and not m.wsOpen and m.wsStarted.TotalSeconds() > 10 then
            try
                m.ws.Close()
            catch e
            end try
            socketLost()
        end if
    else if m.poll <> invalid and m.pollStarted.TotalSeconds() > 20 then
        m.poll.AsyncCancel()
        startPoll()
    end if
end sub

function newRequest(url as string) as object
    x = CreateObject("roUrlTransfer")
    x.SetUrl(url)
    x.SetCertificatesFile("common:/certs/ca-bundle.crt")
    x.InitClientCertificates()
    x.RetainBodyOnError(true)
    return x
end function

' POST and wait for the reply body (used for hello and keys in poll mode).
function postJson(url as string) as object
    x = newRequest(url)
    p = CreateObject("roMessagePort")
    x.SetPort(p)
    x.AddHeader("Content-Type", "application/json")
    if not x.AsyncPostFromString("{}") then return invalid
    ev = wait(10000, p)
    if type(ev) = "roUrlEvent" and ev.GetResponseCode() = 200 then return ParseJson(ev.GetString())
    return invalid
end function

sub connect()
    m.top.status = "Connecting…"
    while true
        room = m.top.room
        if room = invalid then room = ""
        r = postJson(m.top.base + "/api/tv/hello?room=" + room)
        if r <> invalid and r.tv <> invalid then
            m.tv = r.tv
            m.since = 0
            m.top.status = ""
            return
        end if
        sleep(3000)
    end while
end sub

sub startPoll()
    m.poll = newRequest(m.top.base + "/api/tv/poll?tv=" + m.tv + "&since=" + StrI(m.since).Trim())
    m.poll.SetPort(m.port)
    m.poll.AsyncGetToString()
    m.pollStarted = CreateObject("roTimespan")
end sub

' ---------- remote keys ----------
sub sendKey(k as string)
    if m.mode = "ws" then
        if m.ws <> invalid and m.wsOpen then m.ws.Send(FormatJson({ t: "tv:key", k: k }))
    else if m.tv <> "" then
        postJson(m.top.base + "/api/tv/key?tv=" + m.tv + "&k=" + k)
    end if
end sub
