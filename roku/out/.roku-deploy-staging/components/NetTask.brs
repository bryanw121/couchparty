sub init()
    m.top.functionName = "netMain"
end sub

' Main loop: say hello, then keep one long-poll open; remote keys are sent as they arrive.
sub netMain()
    m.port = CreateObject("roMessagePort")
    m.top.observeField("key", m.port)
    m.tv = ""
    m.since = 0
    m.poll = invalid
    connect()
    startPoll()
    while true
        msg = wait(20000, m.port)
        t = type(msg)
        if t = "roSGNodeEvent" then
            if msg.getField() = "key" then sendKey(msg.getData())
        else if t = "roUrlEvent" then
            code = msg.GetResponseCode()
            if code = 200 then
                data = ParseJson(msg.GetString())
                if data <> invalid then
                    m.since = data.seq
                    if data.msgs <> invalid and data.msgs.Count() > 0 then m.top.batch = { msgs: data.msgs }
                end if
                m.top.status = ""
            else if code = 404 then
                ' The server forgot this TV (restart or long sleep): join again with the same room code.
                connect()
            else
                m.top.status = "Reconnecting…"
                sleep(2000)
            end if
            startPoll()
        else if msg = invalid then
            ' No answer in 20 s: the poll is stuck, start a fresh one.
            if m.poll <> invalid then m.poll.AsyncCancel()
            startPoll()
        end if
    end while
end sub

function newRequest(url as string) as object
    x = CreateObject("roUrlTransfer")
    x.SetUrl(url)
    x.SetCertificatesFile("common:/certs/ca-bundle.crt")
    x.InitClientCertificates()
    x.RetainBodyOnError(true)
    x.SetMinimumTransferRate(1, 25)
    return x
end function

' POST and wait for the reply body (used for hello and keys).
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
end sub

sub sendKey(k as string)
    if m.tv = "" then return
    postJson(m.top.base + "/api/tv/key?tv=" + m.tv + "&k=" + k)
end sub
