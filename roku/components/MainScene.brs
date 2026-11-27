' CouchParty Roku TV screen. Renders the state the server sends; the remote sends OK / left / right.

function serverBase() as string
    return "https://br-raspy-feather-bdoyz6f3-couchparty.compute.c-8.us-east-2.aws.neon.tech"
end function

sub init()
    m.clock = CreateObject("roTimespan")
    m.reg = CreateObject("roRegistrySection", "couchparty")
    m.turnEnds = -1
    m.musicOn = true
    m.kartNotice = false

    ' Fonts: DejaVu has the card suit symbols.
    m.fontPath = "pkg:/fonts/DejaVuSans-Bold.ttf"
    m.fontPathReg = "pkg:/fonts/DejaVuSans.ttf"
    setLogo(m.top.findNode("lobbyLogo"))
    setLogo(m.top.findNode("finalLogo"))
    styleLabel("lobbyCount", 30, false)
    styleLabel("scanLbl", 40, true)
    styleLabel("orLbl", 28, false)
    styleLabel("code", 110, true)
    styleLabel("gameTitle", 52, true)
    styleLabel("gameOpts", 30, false)
    styleLabel("playersLbl", 40, true)
    styleLabel("okDot", 22, true)
    styleLabel("startHint", 32, false)
    styleLabel("street", 54, true)
    styleLabel("blinds", 30, false)
    styleLabel("pot", 44, true)
    styleLabel("winners", 38, true)
    styleLabel("winner", 76, true)
    styleLabel("finalGame", 30, false)
    styleLabel("finalHint", 30, false)
    styleLabel("credits", 20, false)
    styleLabel("status", 22, false)
    styleLabel("toast", 32, true)

    ' Background music: CC BY 4.0, credited at the bottom of the screen. Play/Pause toggles it.
    m.music = m.top.findNode("music")
    song = CreateObject("roSGNode", "ContentNode")
    song.url = "pkg:/sounds/lounge.mp3"
    song.streamFormat = "mp3"
    m.music.content = song
    m.music.loop = true
    m.music.control = "play"

    m.tick = m.top.findNode("tick")
    m.tick.observeField("fire", "onTick")
    m.tick.control = "start"
    m.toastTimer = m.top.findNode("toastTimer")
    m.toastTimer.observeField("fire", "onToastDone")

    m.net = CreateObject("roSGNode", "NetTask")
    m.net.base = serverBase()
    saved = m.reg.Read("room")
    if saved = invalid then saved = ""
    m.net.room = saved
    m.net.observeField("batch", "onBatch")
    m.net.observeField("status", "onStatus")
    m.net.control = "run"

    m.top.setFocus(true)
end sub

' ---------- helpers ----------
function mkFont(size as integer, bold as boolean) as object
    f = CreateObject("roSGNode", "Font")
    if bold then f.uri = m.fontPath else f.uri = m.fontPathReg
    f.size = size
    return f
end function

sub styleLabel(id as string, size as integer, bold as boolean)
    n = m.top.findNode(id)
    if n <> invalid then n.font = mkFont(size, bold)
end sub

sub setLogo(lbl as object)
    lbl.font = mkFont(56, true)
    lbl.text = "CouchParty"
    lbl.color = "0xFFC83DFF"
end sub

function addLabel(parent as object, x as integer, y as integer, w as integer, text as string, size as integer, bold as boolean, color as string, align as string) as object
    l = CreateObject("roSGNode", "Label")
    l.translation = [x, y]
    if w > 0 then l.width = w
    l.text = text
    l.font = mkFont(size, bold)
    l.color = color
    l.horizAlign = align
    parent.appendChild(l)
    return l
end function

function addRect(parent as object, x as integer, y as integer, w as integer, h as integer, color as string) as object
    r = CreateObject("roSGNode", "Rectangle")
    r.translation = [x, y]
    r.width = w
    r.height = h
    r.color = color
    parent.appendChild(r)
    return r
end function

sub clearNode(n as object)
    if n.getChildCount() > 0 then n.removeChildrenIndex(n.getChildCount(), 0)
end sub

' "#5EE6C8" -> "0x5EE6C8FF"
function rokuColor(hex as dynamic) as string
    if hex = invalid or Len(hex) < 7 then return "0xF4F5FAFF"
    return "0x" + Mid(hex, 2, 6) + "FF"
end function

function money(n as dynamic) as string
    v = Int(n)
    sign = ""
    if v < 0 then
        sign = "−"
        v = -v
    end if
    s = StrI(v).Trim()
    out = ""
    while Len(s) > 3
        out = "," + Right(s, 3) + out
        s = Left(s, Len(s) - 3)
    end while
    return sign + "$" + s + out
end function

function signed(n as dynamic) as string
    if n > 0 then return "+" + money(n)
    return money(n)
end function

function netColor(n as dynamic) as string
    if n > 0 then return "0x5EE6C8FF"
    if n < 0 then return "0xFF9F9FFF"
    return "0xA9AEC8FF"
end function

function urlEncode(s as string) as string
    out = s.Replace("%", "%25").Replace(":", "%3A").Replace("/", "%2F").Replace("?", "%3F").Replace("=", "%3D").Replace("&", "%26")
    return out
end function

sub showScreen(name as string)
    m.top.findNode("lobby").visible = (name = "lobby")
    m.top.findNode("table").visible = (name = "table")
    m.top.findNode("final").visible = (name = "final")
end sub

' ---------- network ----------
sub onStatus()
    m.top.findNode("status").text = m.net.status
end sub

sub onBatch()
    b = m.net.batch
    if b = invalid or b.msgs = invalid then return
    for each msg in b.msgs
        if msg.t = "tv:room" then
            onRoom(msg.code)
        else if msg.t = "state" then
            render(msg.s)
        else if msg.t = "fx" then
            playFx(msg.n)
        end if
    end for
end sub

sub onRoom(code as string)
    m.reg.Write("room", code)
    m.reg.Flush()
    m.net.room = code
    m.top.findNode("code").text = code
    joinUrl = serverBase() + "/play?room=" + code
    m.top.findNode("qr").uri = "https://api.qrserver.com/v1/create-qr-code/?size=400x400&margin=0&data=" + urlEncode(joinUrl)
end sub

' ---------- sounds ----------
sub playSound(id as string)
    n = m.top.findNode(id)
    if n <> invalid then n.control = "play"
end sub

sub playFx(name as string)
    if name = "shuffle" then
        playSound("sShuffle")
    else if name = "deal" then
        playSound("sDeal")
    else if name = "fold" then
        playSound("sFold")
    else if name = "check" then
        playSound("sCheck")
    else if name = "chip" or name = "raise" then
        playSound("sChip")
    else if name = "allin" then
        playSound("sAllin")
    else if name = "turn" then
        playSound("sTurn")
    else if name = "join" then
        playSound("sJoin")
    else if name = "pot" then
        playSound("sFan")
    end if
end sub

' ---------- screens ----------
sub render(s as object)
    if s.notice <> invalid and s.notice <> "" then
        m.top.findNode("toast").text = s.notice
        m.toastTimer.control = "start"
    end if
    if s.phase = "lobby" then
        renderLobby(s)
    else if s.phase = "final" then
        renderFinal(s)
    else if s.g <> invalid and s.g.kind = "poker" then
        m.kartNotice = false
        renderTable(s.g)
    else if s.g <> invalid and s.g.kind = "kart" then
        ' 3D races need a TV browser; tell everyone and let OK back out.
        showScreen("lobby")
        m.kartNotice = true
        m.top.findNode("toast").text = "Kario Mart needs a Fire TV or browser TV. Press OK to go back."
    end if
    if s.phase <> "game" then m.kartNotice = false
end sub

sub onToastDone()
    m.top.findNode("toast").text = ""
end sub

sub renderLobby(s as object)
    showScreen("lobby")
    m.turnEnds = -1
    st = invalid
    if s.settings <> invalid then st = s.settings.poker
    if st <> invalid then
        blinds = st.blinds.Split("/")
        rebuys = "off"
        if st.rebuys then rebuys = "on"
        m.top.findNode("gameOpts").text = "Buy-in " + money(st.buyIn) + " · Blinds $" + blinds[0] + "/$" + blinds[1] + " · Rebuys " + rebuys + " · play money only"
    end if

    chips = m.top.findNode("playerChips")
    clearNode(chips)
    host = invalid
    i = 0
    for each p in s.players
        if p.isHost then host = p
        x = (i mod 2) * 600
        y = Int(i / 2) * 96
        addRect(chips, x, y, 580, 80, "0x1A1D33FF")
        addRect(chips, x + 14, y + 14, 52, 52, rokuColor(p.color))
        addLabel(chips, x + 14, y + 22, 52, UCase(Left(p.name, 1)), 26, true, "0x0E1020FF", "center")
        tag = ""
        if p.isHost then tag = "   host"
        addLabel(chips, x + 84, y + 20, 480, p.name + tag, 32, true, "0xF4F5FAFF", "left")
        i = i + 1
    end for
    if i = 0 then addLabel(chips, 0, 10, 1100, "Nobody yet — scan the code with your phone", 30, false, "0xA9AEC8FF", "left")
    m.top.findNode("lobbyCount").text = StrI(i).Trim() + " joined"
    if host <> invalid then
        m.top.findNode("startHint").text = host.name + " (host) picks options and taps Start — or press OK on the remote"
    else
        m.top.findNode("startHint").text = "Waiting for players to join…"
    end if
end sub

function suitSymbol(c as string) as string
    if c = "s" then return "♠"
    if c = "h" then return "♥"
    if c = "d" then return "♦"
    return "♣"
end function

sub addCard(parent as object, x as integer, y as integer, w as integer, h as integer, c as dynamic, size as integer)
    if c = invalid then
        addRect(parent, x, y, w, h, "0x1E6B4CFF")
        return
    end if
    addRect(parent, x, y, w, h, "0xFFFFFFFF")
    r = Left(c, 1)
    if r = "T" then r = "10"
    s = Mid(c, 2, 1)
    color = "0x0E1020FF"
    if s = "h" or s = "d" then color = "0xD23B4CFF"
    l = addLabel(parent, x, y, w, r + suitSymbol(s), size, true, color, "center")
    l.height = h
    l.vertAlign = "center"
end sub

sub renderTable(g as object)
    showScreen("table")
    if g.phase = "showdown" then
        streetName = "Showdown"
    else if g.phase = "waiting" then
        streetName = "Waiting"
    else
        streetName = UCase(Left(g.street, 1)) + Mid(g.street, 2)
    end if
    m.top.findNode("street").text = "Hold'em · " + streetName
    m.top.findNode("blinds").text = "Hand " + StrI(g.hands).Trim() + " · Blinds $" + StrI(g.sb).Trim() + "/$" + StrI(g.bb).Trim() + " · Buy-in " + money(g.buyIn) + " · play money"
    if g.pot > 0 then m.top.findNode("pot").text = "Pot " + money(g.pot) else m.top.findNode("pot").text = ""

    board = m.top.findNode("board")
    clearNode(board)
    for i = 0 to 4
        c = invalid
        if i < g.board.Count() then c = g.board[i]
        addCard(board, i * 144, 0, 128, 180, c, 56)
    end for

    win = ""
    winIds = {}
    for each w in g.winners
        if win <> "" then win = win + " · "
        win = win + w.name + " wins " + money(w.amount)
        if w.hand <> invalid and w.hand <> "" then win = win + " with " + w.hand
        winIds[w.pid] = true
    end for
    if g.phase = "waiting" then win = "Waiting for a busted player to rebuy… (host can end the game)"
    m.top.findNode("winners").text = win

    seats = m.top.findNode("seats")
    clearNode(seats)
    m.turnEnds = -1
    m.turnLabel = invalid
    i = 0
    for each s in g.seats
        x = (i mod 4) * 438
        y = Int(i / 4) * 178
        border = "0x1A1D33FF"
        if s.turn then border = "0xFFC83DFF"
        if winIds.DoesExist(s.pid) then border = "0x5EE6C8FF"
        addRect(seats, x, y, 414, 164, border)
        addRect(seats, x + 4, y + 4, 406, 156, "0x1A1D33FF")
        faded = (s.dealt and s.folded) or not s.dealt or s.cashed
        nameColor = rokuColor(s.color)
        textColor = "0xF4F5FAFF"
        if faded then
            nameColor = "0x5A5F7AFF"
            textColor = "0x6E7394FF"
        end if
        nm = s.name
        if s.dealer then nm = nm + "  (D)"
        addLabel(seats, x + 20, y + 14, 250, nm, 30, true, nameColor, "left")
        addLabel(seats, x + 230, y + 14, 164, money(s.chips), 30, true, textColor, "right")
        addLabel(seats, x + 230, y + 52, 164, "net " + signed(s.net), 22, true, netColor(s.net), "right")
        if s.cards <> invalid then
            addCard(seats, x + 20, y + 60, 58, 80, s.cards[0], 26)
            addCard(seats, x + 84, y + 60, 58, 80, s.cards[1], 26)
            addLabel(seats, x + 152, y + 100, 240, s.hand, 22, false, "0xF4F5FAFF", "left")
        else
            note = s.last
            if note = invalid then note = ""
            if s.turn then
                note = "Thinking…"
                m.turnEnds = m.clock.TotalMilliseconds() + g.turnEndsIn
                m.turnLabel = addLabel(seats, x + 20, y + 96, 380, "", 26, true, "0xFFC83DFF", "left")
            end if
            addLabel(seats, x + 20, y + 60, 380, note, 26, false, "0xA9AEC8FF", "left")
            if s.bet > 0 then addLabel(seats, x + 20, y + 120, 380, "Bet " + money(s.bet), 26, true, "0xFFE08AFF", "left")
            if s.away then addLabel(seats, x + 230, y + 120, 164, "offline", 22, false, "0x6E7394FF", "right")
        end if
        i = i + 1
    end for
    onTick()
end sub

sub onTick()
    if m.turnEnds < 0 or m.turnLabel = invalid then return
    secsLeft = Int((m.turnEnds - m.clock.TotalMilliseconds() + 999) / 1000)
    if secsLeft < 0 then secsLeft = 0
    m.turnLabel.text = StrI(secsLeft).Trim() + "s left"
end sub

sub renderFinal(s as object)
    showScreen("final")
    m.turnEnds = -1
    led = m.top.findNode("ledger")
    clearNode(led)
    r = s.results
    if r = invalid or r.Count() = 0 then
        m.top.findNode("winner").text = "Game over"
        return
    end if
    if r[0].score > 0 then
        m.top.findNode("winner").text = r[0].name + " is up " + signed(r[0].score)
    else
        m.top.findNode("winner").text = "Everyone broke even"
    end if
    addLabel(led, 100, 0, 600, "Player", 26, true, "0xA9AEC8FF", "left")
    addLabel(led, 900, 0, 260, "Bought in", 26, true, "0xA9AEC8FF", "left")
    addLabel(led, 1180, 0, 260, "Cashed out", 26, true, "0xA9AEC8FF", "left")
    addLabel(led, 1460, 0, 260, "Net", 26, true, "0xA9AEC8FF", "right")
    i = 0
    for each p in r
        if i >= 7 then exit for
        y = 50 + i * 92
        addRect(led, 0, y, 1728, 80, "0x1A1D33FF")
        addLabel(led, 24, y + 20, 50, StrI(i + 1).Trim(), 32, true, "0xA9AEC8FF", "left")
        addLabel(led, 100, y + 20, 760, p.name, 34, true, rokuColor(p.color), "left")
        if p.money <> invalid and p.money then
            addLabel(led, 900, y + 20, 260, money(p.bought), 32, false, "0xF4F5FAFF", "left")
            addLabel(led, 1180, y + 20, 260, money(p.final), 32, false, "0xF4F5FAFF", "left")
            addLabel(led, 1460, y + 20, 244, signed(p.score), 34, true, netColor(p.score), "right")
        else
            addLabel(led, 1460, y + 20, 244, StrI(p.score).Trim() + " " + p.unit, 34, true, "0xF4F5FAFF", "right")
        end if
        i = i + 1
    end for
end sub

' ---------- remote ----------
function onKeyEvent(key as string, press as boolean) as boolean
    if not press then return false
    if key = "OK" then
        if m.kartNotice = true then
            m.net.key = "menu"
            return true
        end if
        m.net.key = "ok"
        return true
    else if key = "left" or key = "right" then
        m.net.key = key
        return true
    else if key = "play" then
        m.musicOn = not m.musicOn
        if m.musicOn then m.music.control = "play" else m.music.control = "pause"
        return true
    end if
    return false
end function
