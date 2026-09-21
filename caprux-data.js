// ================================================================
// CAPRUX — caprux-data.js  v3.0 FINAL
// Baca data dari products.csv dan nobody-sound.csv (root folder)
// Support separator ; (semicolon) & , (koma)
// Skip baris komentar otomatis
// ================================================================
window.CAPRUX_DATA = (function () {
  'use strict';

  // ── Deteksi separator ──
  function detectSeparator(text) {
    var firstLine = text.split('\n')[0];
    var semi  = (firstLine.match(/;/g) || []).length;
    var comma = (firstLine.match(/,/g) || []).length;
    return semi > comma ? ';' : ',';
  }

  // ── Split baris CSV ──
  function splitLine(line, sep) {
    sep = sep || ',';
    var result = [], cur = '', inQ = false;
    for (var i = 0; i < line.length; i++) {
      var ch = line[i];
      if (ch === '"') { inQ = !inQ; continue; }
      if (ch === sep && !inQ) { result.push(cur); cur = ''; continue; }
      cur += ch;
    }
    result.push(cur);
    return result;
  }

  // ── Parse CSV dengan auto-skip komentar ──
  function parseCSV(text) {
    // Buang BOM jika ada
    text = text.replace(/^\uFEFF/, '');

    var lines = text.split('\n');
    var sep = detectSeparator(text);

    // Cari baris header asli (dimulai dengan "id" + separator)
    var headerIdx = 0;
    for (var i = 0; i < lines.length; i++) {
      var l = lines[i].trim();
      if (!l) continue;
      var lower = l.toLowerCase();
      if (lower.startsWith('id' + sep) || lower === 'id') {
        headerIdx = i;
        break;
      }
    }

    var headers = splitLine(lines[headerIdx], sep);
    var rows = [];

    for (var j = headerIdx + 1; j < lines.length; j++) {
      var line = lines[j].trim();
      if (!line) continue;
      // Skip baris yang cuma separator
      if (/^[;,]+$/.test(line)) continue;

      var vals = splitLine(line, sep);
      var obj = {};
      headers.forEach(function (h, idx) {
        obj[h.trim()] = (vals[idx] || '').trim();
      });

      // Hanya push kalau punya id
      if (obj.id) rows.push(obj);
    }
    return rows;
  }

  // ── Fetch CSV dengan cache bust ──
  function fetchCSV(path) {
    var bust = new Date().toISOString().slice(0, 10).replace(/-/g, '');
    return fetch(path + '?v=' + bust).then(function (r) {
      if (!r.ok) throw new Error('Gagal fetch ' + path + ' (' + r.status + ')');
      return r.text();
    });
  }

  // ── Parse stok "M-Hitam=10,L-Hitam=8" ──
  function parseStok(str) {
    if (!str) return {};
    var result = {};
    str.split(',').forEach(function (item) {
      var parts = item.trim().split('=');
      if (parts.length === 2) {
        result[parts[0].trim()] = parseInt(parts[1], 10) || 0;
      }
    });
    return result;
  }

  // ── Row → Product ──
  function rowToProduct(row) {
    var sizes  = row.var_size
      ? row.var_size.split(',').map(function (s) { return s.trim(); }).filter(Boolean)
      : ['M', 'L', 'XL'];
    var colors = row.var_warna
      ? row.var_warna.split(',').map(function (s) { return s.trim(); }).filter(Boolean)
      : [];
    var stok   = parseStok(row.var_stok);

    return {
      id:        row.id,
      name:      row.name,
      type:      row.type,
      badge:     '// ' + row.type,
      desc:      row.desc,
      price:     row.price,
      status:    row.status || 'soon',
      shopeeUrl: row.shopee_url || '',
      image:     row.image1,
      images:    [row.image1, row.image2, row.image3, row.image4].filter(Boolean),
      sizes:     sizes,
      colors:    colors,
      stok:      stok,
      // Legacy compat
      tag:       '// ' + row.type,
      fullDesc:  row.desc,
      specs:     [],
      details:   [],
      sizeGuide: null,
      care:      [],
      tags:      [],
      related:   []
    };
  }

  // ── Row → Guest ──
  function rowToGuest(row) {
    var socials = [];
    if (row.ig)       socials.push({ platform: 'Instagram', url: 'https://instagram.com/' + row.ig.replace('@', '') });
    if (row.tiktok)   socials.push({ platform: 'TikTok',    url: 'https://tiktok.com/'    + row.tiktok.replace('@', '') });
    if (row.whatsapp) socials.push({ platform: 'WhatsApp',  url: 'https://wa.me/'         + row.whatsapp.replace(/[^0-9]/g, '') });

    return {
      id:        row.id,
      nickname:  row.nickname,
      kategori:  row.kategori,
      jangkauan: row.jangkauan,
      foto:      row.foto || '',
      socials:   socials,
      deskripsi: row.deskripsi || ''
    };
  }

  return {
    loadProducts: function () {
      return fetchCSV('products.csv').then(function (text) {
        return parseCSV(text).map(rowToProduct);
      });
    },
    loadGuests: function () {
      return fetchCSV('nobody-sound.csv').then(function (text) {
        return parseCSV(text).map(rowToGuest);
      });
    }
  };
})();
