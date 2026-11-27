/*KART_PORTRAITS*/
/*KART_COURSES*/
/* Kario Mart menu art: original drivers, mode and speed badges, course thumbnails (ES5, shared by tv.html and play.html) */
var KA = (function () {
  var INK = '#1b1b3a';
  var PORTRAIT_IDS = { cap: 'ace', cat: 'tabby', bow: 'lulu', bunny: 'bunbun', horns: 'rex', antenna: 'zippy', crown: 'duke', bear: 'grizz' };
  function portraitSource(d) {
    var id = d.id || PORTRAIT_IDS[d.topper] || 'ace';
    return typeof KARIO_PORTRAITS !== 'undefined' ? KARIO_PORTRAITS[id] || KARIO_PORTRAITS.ace : '';
  }
  // Pre-rendered from the same 3D sculpt used by the race, not flat SVG stand-ins.
  function driver(d) {
    return '<img src="' + portraitSource(d) + '" alt="' + (d.name || 'Driver') + ' 3D portrait" width="256" height="256" decoding="async" style="display:block;width:100%;height:100%;object-fit:cover;border-radius:12%;"/>';
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
  function course(c) {
    var source = typeof KARIO_COURSES !== 'undefined' ? KARIO_COURSES[c.id] || '' : '';
    return '<img src="' + source + '" alt="' + c.name + ' 3D course preview" width="320" height="180" decoding="async" style="display:block;width:100%;height:100%;object-fit:cover;"/>';
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
    if (typeof KARIO_COURSES !== 'undefined' && KARIO_COURSES.kart) return '<img src="' + KARIO_COURSES.kart + '" alt="Kario Mart 3D kart racing" width="320" height="200" style="display:block;width:100%;height:100%;object-fit:cover;"/>';
    // Legacy fallback for clients that have not loaded the rendered asset registry.
    return '<svg viewBox="0 0 160 100" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">' +
      '<rect width="160" height="100" fill="#7cc8ff"/><ellipse cx="40" cy="70" rx="70" ry="22" fill="#5ccf45"/><ellipse cx="130" cy="72" rx="60" ry="20" fill="#4fbf3a"/>' +
      '<rect x="0" y="76" width="160" height="24" fill="#6b6f80"/><rect x="0" y="74" width="160" height="4" fill="#fff"/><path d="M0 74 h10 v4 h-10z M20 74 h10 v4 h-10z M40 74 h10 v4 h-10z M60 74 h10 v4 h-10z M80 74 h10 v4 h-10z M100 74 h10 v4 h-10z M120 74 h10 v4 h-10z M140 74 h10 v4 h-10z" fill="#ef4444"/>' +
      '<path d="M8 60 h26 M14 68 h22 M4 52 h20" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".8"/>' +
      '<g transform="translate(132 22)"><path d="M0 0 V56" stroke="' + INK + '" stroke-width="3"/><path d="M2 2 h20 v14 h-20z" fill="#fff" stroke="' + INK + '" stroke-width="2"/><path d="M2 2 h5 v4.7 h-5z M12 2 h5 v4.7 h-5z M7 6.7 h5 v4.7 h-5z M17 6.7 h5 v4.7 h-5z M2 11.4 h5 v4.6 h-5z M12 11.4 h5 v4.6 h-5z" fill="' + INK + '"/></g>' +
      '<g transform="translate(46 34)">' +
        '<path d="M6 44 L14 30 L60 28 L72 38 L74 46 Z" fill="#ffc83d" stroke="' + INK + '" stroke-width="3" stroke-linejoin="round"/>' +
        '<rect x="62" y="26" width="6" height="10" fill="#fff" stroke="' + INK + '" stroke-width="2"/>' +
        '<circle cx="18" cy="48" r="9" fill="' + INK + '"/><circle cx="18" cy="48" r="3.5" fill="#c9d3e6"/><circle cx="62" cy="48" r="9" fill="' + INK + '"/><circle cx="62" cy="48" r="3.5" fill="#c9d3e6"/>' +
        '<image x="14" y="-8" width="42" height="42" href="' + portraitSource({id:'ace'}) + '"/>' +
      '</g></svg>';
  }
  var GAMEINFO = { poker: { tag: 'Bluff your friends', players: '2–8 players' }, kart: { tag: '3D kart racing', players: '1–4 players · 8 karts' } };
  return { driver: driver, mode: mode, speed: speed, course: course, bars: bars, game: game, info: function (id) { return GAMEINFO[id] || { tag: '', players: '' }; } };
})();
