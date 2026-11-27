/* Kart Racer menu art: original drivers, mode and speed badges, course thumbnails (ES5, shared by tv.html and play.html) */
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
  // Round-headed driver portrait
  function driver(d) {
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
  return { driver: driver, mode: mode, speed: speed, course: course, bars: bars };
})();
