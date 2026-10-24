// (Di dalam fungsi renderInfo)
panel.innerHTML = ''
  + '<div class="ns-info-inner">'
  +   '<div class="ns-info-head">'
  +     '<h3 class="ns-info-name">' + g.nickname + '</h3>'
  +     '<span class="ns-info-cat">// TRANSMISI AKTIF</span>'
  +   '</div>'
  +   (g.jangkauan ? '<p class="ns-info-loc">📍 ' + g.jangkauan + '</p>' : '')
  +   (g.deskripsi ? '<p class="ns-info-desc">' + g.deskripsi + '</p>' : '')
  +   (socialHtml ? '<div class="ns-socials">' + socialHtml + '</div>' : '')
  + '</div>';
