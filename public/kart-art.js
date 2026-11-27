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
  function course(c) {
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
    // kart: an original driver in a little kart, with speed lines and a checkered flag
    return '<svg viewBox="0 0 160 100" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">' +
      '<rect width="160" height="100" fill="#7cc8ff"/><ellipse cx="40" cy="70" rx="70" ry="22" fill="#5ccf45"/><ellipse cx="130" cy="72" rx="60" ry="20" fill="#4fbf3a"/>' +
      '<rect x="0" y="76" width="160" height="24" fill="#6b6f80"/><rect x="0" y="74" width="160" height="4" fill="#fff"/><path d="M0 74 h10 v4 h-10z M20 74 h10 v4 h-10z M40 74 h10 v4 h-10z M60 74 h10 v4 h-10z M80 74 h10 v4 h-10z M100 74 h10 v4 h-10z M120 74 h10 v4 h-10z M140 74 h10 v4 h-10z" fill="#ef4444"/>' +
      '<path d="M8 60 h26 M14 68 h22 M4 52 h20" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".8"/>' +
      '<g transform="translate(132 22)"><path d="M0 0 V56" stroke="' + INK + '" stroke-width="3"/><path d="M2 2 h20 v14 h-20z" fill="#fff" stroke="' + INK + '" stroke-width="2"/><path d="M2 2 h5 v4.7 h-5z M12 2 h5 v4.7 h-5z M7 6.7 h5 v4.7 h-5z M17 6.7 h5 v4.7 h-5z M2 11.4 h5 v4.6 h-5z M12 11.4 h5 v4.6 h-5z" fill="' + INK + '"/></g>' +
      '<g transform="translate(46 34)">' +
        '<path d="M6 44 L14 30 L60 28 L72 38 L74 46 Z" fill="#ffc83d" stroke="' + INK + '" stroke-width="3" stroke-linejoin="round"/>' +
        '<rect x="62" y="26" width="6" height="10" fill="#fff" stroke="' + INK + '" stroke-width="2"/>' +
        '<circle cx="18" cy="48" r="9" fill="' + INK + '"/><circle cx="18" cy="48" r="3.5" fill="#c9d3e6"/><circle cx="62" cy="48" r="9" fill="' + INK + '"/><circle cx="62" cy="48" r="3.5" fill="#c9d3e6"/>' +
        '<g transform="translate(14 -8) scale(.42)">' + driverSvg({ color: '#4CC9F0', topper: 'antenna' }).replace(/^<svg[^>]*>/, '').replace(/<\/svg>$/, '') + '</g>' +
      '</g></svg>';
  }
  var GAMEINFO = { poker: { tag: 'Bluff your friends', players: '2–8 players' }, kart: { tag: '3D kart racing', players: '1–4 players · 8 karts' } };
  return { driver: driver, mode: mode, speed: speed, course: course, bars: bars, game: game, info: function (id) { return GAMEINFO[id] || { tag: '', players: '' }; } };
})();
