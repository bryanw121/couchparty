/*KART_ITEMS*/
/*KART_COURSES*/
/*KART_PORTRAITS*/
/* Kario Mart menu art: original drivers, mode and speed badges, course thumbnails (ES5, shared by tv.html and play.html) */
var KA = (function () {
  var INK = '#1b1b3a';
  function toppers(t, c) {
    switch (t) {
      case 'cat': return '<path d="M22 34 L18 8 L42 24 Z" fill="' + c + '" stroke="' + INK + '" stroke-width="3" stroke-linejoin="round"/><path d="M78 34 L82 8 L58 24 Z" fill="' + c + '" stroke="' + INK + '" stroke-width="3" stroke-linejoin="round"/><path d="M25 28 L23 15 L35 24 Z M75 28 L77 15 L65 24 Z" fill="#ffc9d6"/>';
      case 'bunny': return '<ellipse cx="36" cy="14" rx="8" ry="20" fill="#fff" stroke="' + INK + '" stroke-width="3" transform="rotate(-12 36 14)"/><ellipse cx="64" cy="14" rx="8" ry="20" fill="#fff" stroke="' + INK + '" stroke-width="3" transform="rotate(12 64 14)"/><ellipse cx="36" cy="16" rx="3.5" ry="13" fill="#ffc9d6" transform="rotate(-12 36 16)"/><ellipse cx="64" cy="16" rx="3.5" ry="13" fill="#ffc9d6" transform="rotate(12 64 16)"/>';
      case 'crown': return '<path d="M30 24 L30 6 L40 16 L50 3 L60 16 L70 6 L70 24 Z" fill="#ffd34d" stroke="' + INK + '" stroke-width="3" stroke-linejoin="round"/><circle cx="50" cy="16" r="3.5" fill="#ff3b8d"/><circle cx="38" cy="19" r="2.5" fill="#4cc9f0"/><circle cx="62" cy="19" r="2.5" fill="#4cc9f0"/>';
      case 'horns': return '<path d="M28 30 C14 22 14 8 22 4 C22 14 28 20 38 22 Z" fill="#fff6e0" stroke="' + INK + '" stroke-width="3" stroke-linejoin="round"/><path d="M72 30 C86 22 86 8 78 4 C78 14 72 20 62 22 Z" fill="#fff6e0" stroke="' + INK + '" stroke-width="3" stroke-linejoin="round"/>';
      case 'bow': return '<path d="M62 20 L50 10 L50 30 Z M62 20 L74 10 L74 30 Z" fill="#ff5d8f" stroke="' + INK + '" stroke-width="3" stroke-linejoin="round" transform="translate(6 2)"/><circle cx="68" cy="22" r="5" fill="#ff9ccd" stroke="' + INK + '" stroke-width="3"/>';
      case 'antenna': return '<path d="M50 22 L50 6" stroke="' + INK + '" stroke-width="3"/><circle cx="50" cy="6" r="6" fill="#fff15a" stroke="' + INK + '" stroke-width="3"/>';
      case 'cap': return '<path d="M24 36 C24 14 76 14 76 36 Z" fill="#3b5bdb" stroke="' + INK + '" stroke-width="3" stroke-linejoin="round"/><path d="M50 36 L88 36 C88 42 70 44 50 40 Z" fill="#3b5bdb" stroke="' + INK + '" stroke-width="3" stroke-linejoin="round"/><circle cx="50" cy="20" r="3" fill="#fff"/>';
      case 'bear': return '<circle cx="26" cy="24" r="12" fill="' + c + '" stroke="' + INK + '" stroke-width="3"/><circle cx="74" cy="24" r="12" fill="' + c + '" stroke="' + INK + '" stroke-width="3"/><circle cx="26" cy="24" r="6" fill="#ffc9d6"/><circle cx="74" cy="24" r="6" fill="#ffc9d6"/>';
    }
    return '';
  }
  // Pre-rendered from the same 3D models used in the race (scripts/render-kart-portraits.mjs); SVG fallback.
  var PORTRAIT_IDS = { cap: 'ace', cat: 'tabby', bow: 'lulu', bunny: 'bunbun', horns: 'rex', antenna: 'zippy', crown: 'duke', bear: 'grizz' };
  function portraitSource(d) {
    var id = d.id || PORTRAIT_IDS[d.topper] || 'ace';
    return typeof KART_PORTRAITS !== 'undefined' ? KART_PORTRAITS[id] || KART_PORTRAITS[PORTRAIT_IDS[d.topper]] || '' : '';
  }
  function driver(d) {
    var src = portraitSource(d);
    if (src) return '<img src="' + src + '" alt="' + (d.name || 'Driver') + '" decoding="async" style="display:block;width:100%;height:100%;object-fit:cover;border-radius:14%"/>';
    return driverSvg(d);
  }
  function driverSvg(d) {
    var c = d.color, behind = (d.topper === 'cat' || d.topper === 'bunny' || d.topper === 'horns' || d.topper === 'bear') ? toppers(d.topper, c) : '';
    var front = behind ? '' : toppers(d.topper, c);
    return '<svg viewBox="0 0 100 100" width="100%" height="100%">' + behind +
      '<circle cx="50" cy="58" r="34" fill="' + c + '" stroke="' + INK + '" stroke-width="3.5"/>' +
      '<ellipse cx="50" cy="66" rx="22" ry="17" fill="rgba(255,255,255,.28)"/>' +
      '<ellipse cx="39" cy="55" rx="7" ry="9" fill="#fff" stroke="' + INK + '" stroke-width="2"/><ellipse cx="61" cy="55" rx="7" ry="9" fill="#fff" stroke="' + INK + '" stroke-width="2"/>' +
      '<ellipse cx="40" cy="56" rx="3.8" ry="5.2" fill="' + INK + '"/><ellipse cx="62" cy="56" rx="3.8" ry="5.2" fill="' + INK + '"/>' +
      '<circle cx="41.5" cy="53.5" r="1.6" fill="#fff"/><circle cx="63.5" cy="53.5" r="1.6" fill="#fff"/>' +
      '<ellipse cx="29" cy="68" rx="5" ry="3" fill="#ff8fa3" opacity=".8"/><ellipse cx="71" cy="68" rx="5" ry="3" fill="#ff8fa3" opacity=".8"/>' +
      '<path d="M43 70 Q50 77 57 70" fill="none" stroke="' + INK + '" stroke-width="3" stroke-linecap="round"/>' + front + '</svg>';
  }
  function mode(id) {
    if (id === 'cup') return '<svg viewBox="0 0 100 100" width="100%" height="100%"><path d="M28 14 H72 V34 C72 52 62 60 50 60 C38 60 28 52 28 34 Z" fill="#ffd34d" stroke="' + INK + '" stroke-width="4" stroke-linejoin="round"/><path d="M28 20 C12 20 12 42 30 44 M72 20 C88 20 88 42 70 44" fill="none" stroke="' + INK + '" stroke-width="4"/><rect x="44" y="60" width="12" height="14" fill="#ffb800" stroke="' + INK + '" stroke-width="4"/><rect x="32" y="74" width="36" height="12" rx="3" fill="#9b6bff" stroke="' + INK + '" stroke-width="4"/><path d="M50 22 L53 30 L61 30 L55 35 L57 43 L50 38 L43 43 L45 35 L39 30 L47 30 Z" fill="#fff"/></svg>';
    if (id === 'vs') return '<svg viewBox="0 0 100 100" width="100%" height="100%"><path d="M26 10 V92" stroke="' + INK + '" stroke-width="6" stroke-linecap="round"/><path d="M28 14 C44 6 58 22 80 12 V52 C58 62 44 46 28 54 Z" fill="#fff" stroke="' + INK + '" stroke-width="4" stroke-linejoin="round"/><path d="M28 14 C34 11 39 11 44 13 V30 C39 28 34 28 28 31 Z M44 30 C49 32 54 36 60 34 V50 C54 52 49 48 44 46 Z M60 17 C66 19 72 18 80 12 V30 C72 34 66 35 60 34 Z M28 31 C34 28 39 28 44 30 V46 C39 45 34 46 28 48 Z" fill="' + INK + '"/></svg>';
    return '<svg viewBox="0 0 100 100" width="100%" height="100%"><rect x="42" y="6" width="16" height="10" rx="3" fill="#4cc9f0" stroke="' + INK + '" stroke-width="4"/><circle cx="50" cy="56" r="36" fill="#fff" stroke="' + INK + '" stroke-width="5"/><circle cx="50" cy="56" r="28" fill="#e9f7ff"/><path d="M50 56 L50 32" stroke="#ff3b3b" stroke-width="5" stroke-linecap="round"/><path d="M50 56 L66 64" stroke="' + INK + '" stroke-width="5" stroke-linecap="round"/><circle cx="50" cy="56" r="5" fill="' + INK + '"/><path d="M76 22 L84 14" stroke="' + INK + '" stroke-width="5" stroke-linecap="round"/></svg>';
  }
  function speed(id) {
    var n = id === 'chill' ? 1 : id === 'fast' ? 2 : 3, col = id === 'chill' ? '#5ee6c8' : id === 'fast' ? '#ffc83d' : '#ff5d5d', s = '';
    for (var i = 0; i < n; i++) s += '<path d="M' + (22 + i * 20) + ' 22 L' + (48 + i * 20) + ' 50 L' + (22 + i * 20) + ' 78" fill="none" stroke="' + INK + '" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/><path d="M' + (22 + i * 20) + ' 22 L' + (48 + i * 20) + ' 50 L' + (22 + i * 20) + ' 78" fill="none" stroke="' + col + '" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>';
    return '<svg viewBox="0 0 100 100" width="100%" height="100%">' + s + '</svg>';
  }
  var uid = 0;
  function item(kind) {
    var src = typeof KART_ITEMS !== 'undefined' && KART_ITEMS[kind];
    return src ? '<img src="' + src + '" alt="Item" style="display:block;width:100%;height:100%;object-fit:contain"/>' : '';
  }
  function course(c) {
    var src = typeof KARIO_COURSES !== 'undefined' && KARIO_COURSES[c.id];
    if (src) return '<img src="' + src + '" alt="' + c.name + '" style="display:block;width:100%;height:100%;object-fit:cover"/>';
    var id = 'cg' + (uid++);
    return '<svg viewBox="0 0 100 100" width="100%" height="100%" preserveAspectRatio="xMidYMid slice"><defs><linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + c.sky + '"/><stop offset="1" stop-color="' + c.ground + '"/></linearGradient></defs>' +
      '<rect width="100" height="100" fill="url(#' + id + ')"/>' +
      '<path d="' + c.path + '" fill="none" stroke="' + INK + '" stroke-width="9" stroke-linejoin="round"/><path d="' + c.path + '" fill="none" stroke="#fff" stroke-width="5" stroke-linejoin="round"/></svg>';
  }
  function bars(d) {
    var rows = [['Speed', d.spd], ['Accel', d.acc], ['Handling', d.hnd]], h = '';
    for (var i = 0; i < rows.length; i++) {
      h += '<div class="kabar"><span>' + rows[i][0] + '</span><i>';
      for (var j = 1; j <= 5; j++) h += '<b' + (j <= rows[i][1] ? ' class="on"' : '') + '></b>';
      h += '</i></div>';
    }
    return h;
  }
  // Lobby pictures for each game (original art)
  function game(id) {
    if (id === 'poker') return '<svg viewBox="0 0 160 100" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">' +
      '<rect width="160" height="100" fill="#123d2c"/><ellipse cx="80" cy="62" rx="74" ry="38" fill="#1f7a4d" stroke="#0d2b20" stroke-width="4"/><ellipse cx="80" cy="62" rx="60" ry="28" fill="none" stroke="#2f9a63" stroke-width="2"/>' +
      '<g transform="rotate(-12 64 50)"><rect x="46" y="24" width="34" height="48" rx="5" fill="#fff" stroke="' + INK + '" stroke-width="2.5"/><text x="52" y="40" font-family="Inter,sans-serif" font-weight="900" font-size="14" fill="#e23b3b">A</text><path d="M63 54 C57 48 57 44 61 43 C63 43 63 45 63 45 C63 45 63 43 65 43 C69 44 69 48 63 54 Z" fill="#e23b3b"/></g>' +
      '<g transform="rotate(10 92 50)"><rect x="76" y="24" width="34" height="48" rx="5" fill="#fff" stroke="' + INK + '" stroke-width="2.5"/><text x="82" y="40" font-family="Inter,sans-serif" font-weight="900" font-size="14" fill="' + INK + '">K</text><path d="M93 44 C87 50 88 55 92 55 L91 58 L95 58 L94 55 C98 55 99 50 93 44 Z" fill="' + INK + '"/></g>' +
      '<g><ellipse cx="128" cy="78" rx="13" ry="5" fill="#c0392b" stroke="' + INK + '" stroke-width="2"/><ellipse cx="128" cy="73" rx="13" ry="5" fill="#f5f5f5" stroke="' + INK + '" stroke-width="2"/><ellipse cx="128" cy="68" rx="13" ry="5" fill="#3b82f6" stroke="' + INK + '" stroke-width="2"/></g>' +
      '<g><ellipse cx="30" cy="80" rx="12" ry="4.5" fill="#ffc83d" stroke="' + INK + '" stroke-width="2"/><ellipse cx="30" cy="75" rx="12" ry="4.5" fill="#c0392b" stroke="' + INK + '" stroke-width="2"/></g></svg>';
    // kart: two karts racing down a winding road toward a start arch, with a gift item box and boost pads
    var kartBack = function (x, y, sc, body, helmet) {
      return '<g transform="translate(' + x + ' ' + y + ') scale(' + sc + ')">' +
        '<ellipse cx="0" cy="17" rx="27" ry="5" fill="rgba(0,0,0,.28)"/>' +
        '<rect x="-27" y="2" width="12" height="15" rx="4" fill="' + INK + '"/><rect x="15" y="2" width="12" height="15" rx="4" fill="' + INK + '"/>' +
        '<path d="M-19 -6 Q0 -14 19 -6 L22 9 Q0 14 -22 9 Z" fill="' + body + '" stroke="' + INK + '" stroke-width="2.5" stroke-linejoin="round"/>' +
        '<rect x="-24" y="-15" width="48" height="6" rx="3" fill="' + body + '" stroke="' + INK + '" stroke-width="2.5"/>' +
        '<rect x="-10" y="-2" width="20" height="6" rx="2" fill="#c9d3e6" stroke="' + INK + '" stroke-width="2"/>' +
        '<circle cx="-7" cy="10" r="3" fill="#ff7a00"/><circle cx="7" cy="10" r="3" fill="#ff7a00"/>' +
        '<circle cx="0" cy="-22" r="11" fill="' + helmet + '" stroke="' + INK + '" stroke-width="2.5"/><path d="M-9 -25 Q0 -30 9 -25" stroke="#fff" stroke-width="2.5" fill="none" opacity=".7"/>' +
        '<path d="M-6 15 L-12 24 L-2 18 Z M6 15 L12 24 L2 18 Z" fill="#ffd34d" opacity=".9"/></g>';
    };
    return '<svg viewBox="0 0 160 100" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">' +
      '<defs><linearGradient id="kgsky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5aa8ff"/><stop offset="1" stop-color="#bfe6ff"/></linearGradient>' +
      '<linearGradient id="kgroad" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8a8fa3"/><stop offset="1" stop-color="#4b5066"/></linearGradient></defs>' +
      '<rect width="160" height="100" fill="url(#kgsky)"/>' +
      '<ellipse cx="22" cy="14" rx="12" ry="5" fill="#fff" opacity=".9"/><ellipse cx="31" cy="12" rx="8" ry="5" fill="#fff" opacity=".9"/><ellipse cx="122" cy="10" rx="11" ry="4" fill="#fff" opacity=".85"/>' +
      '<path d="M0 46 Q30 30 62 42 T120 38 T160 44 V100 H0Z" fill="#6fd65a"/><path d="M0 54 Q40 42 80 50 T160 52 V100 H0Z" fill="#4fbf3a"/>' +
      '<circle cx="18" cy="44" r="6" fill="#ff9ccd"/><rect x="17" y="47" width="2" height="5" fill="#8a5a2b"/><circle cx="142" cy="46" r="7" fill="#2fbf71"/><rect x="141" y="50" width="2" height="5" fill="#8a5a2b"/>' +
      // winding road into the distance
      '<path d="M62 50 Q78 47 84 50 Q96 56 86 64 Q70 76 92 100 H18 Q40 78 58 66 Q72 58 62 50Z" fill="url(#kgroad)"/>' +
      '<path d="M62 50 Q72 58 58 66 Q40 78 18 100" fill="none" stroke="#fff" stroke-width="2.5"/><path d="M84 50 Q96 56 86 64 Q70 76 92 100" fill="none" stroke="#fff" stroke-width="2.5"/>' +
      '<path d="M64 52 Q71 58 59 66 Q42 78 22 100" fill="none" stroke="#ef4444" stroke-width="1.6" stroke-dasharray="4 4"/><path d="M82 52 Q93 57 84 64 Q68 76 88 100" fill="none" stroke="#ef4444" stroke-width="1.6" stroke-dasharray="4 4"/>' +
      '<path d="M73 52 Q82 58 72 66 Q58 78 55 100" fill="none" stroke="#fff" stroke-width="1.2" stroke-dasharray="3 5" opacity=".7"/>' +
      // checkered start arch
      '<g><rect x="60" y="34" width="3" height="18" fill="#e5e7eb" stroke="' + INK + '" stroke-width="1"/><rect x="85" y="34" width="3" height="18" fill="#e5e7eb" stroke="' + INK + '" stroke-width="1"/>' +
      '<rect x="58" y="31" width="32" height="6" fill="#fff" stroke="' + INK + '" stroke-width="1.2"/><path d="M58 31h4v3h-4z M66 31h4v3h-4z M74 31h4v3h-4z M82 31h4v3h-4z M62 34h4v3h-4z M70 34h4v3h-4z M78 34h4v3h-4z M86 34h4v3h-4z" fill="' + INK + '"/></g>' +
      // boost pad
      '<g transform="translate(66 72) rotate(-18)"><rect x="-9" y="-4" width="18" height="8" rx="2" fill="#ff9f1a"/><path d="M-6 2 L-3 -2 L0 2 M0 2 L3 -2 L6 2" stroke="#fff6a0" stroke-width="1.6" fill="none"/></g>' +
      // floating gift item box
      '<g transform="translate(104 40) rotate(12)"><rect x="-8" y="-8" width="16" height="16" rx="3" fill="#ff5d8f" stroke="' + INK + '" stroke-width="2" opacity=".95"/><rect x="-2" y="-8" width="4" height="16" fill="#ffd34d"/><rect x="-8" y="-2" width="16" height="4" fill="#ffd34d"/><path d="M0 -8 C-6 -15 -10 -10 -3 -8 M0 -8 C6 -15 10 -10 3 -8" stroke="#ffd34d" stroke-width="2.2" fill="none"/></g>' +
      '<path d="M98 30 l1.2 3 3 1.2 -3 1.2 -1.2 3 -1.2 -3 -3 -1.2 3 -1.2z M114 52 l.9 2.2 2.2.9 -2.2.9 -.9 2.2 -.9 -2.2 -2.2 -.9 2.2 -.9z" fill="#fff"/>' +
      // the two karts, the near one big
      kartBack(80, 58, 0.42, '#4cc9f0', '#fff15a') +
      '<path d="M22 70 h18 M14 78 h20 M26 86 h14" stroke="#fff" stroke-width="2.5" stroke-linecap="round" opacity=".75"/>' +
      kartBack(52, 82, 0.85, '#ff5d5d', '#ffffff') +
      '</svg>';
  }
  var GAMEINFO = { poker: { tag: 'Bluff your friends', players: '2–12 players' }, kart: { tag: '3D kart racing', players: '1–4 players · 8 karts' } };
  return { item: item, driver: driver, mode: mode, speed: speed, course: course, bars: bars, game: game, info: function (id) { return GAMEINFO[id] || { tag: '', players: '' }; } };
})();
