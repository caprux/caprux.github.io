// ================================================================
// CAPRUX — caprux-data.js  v2.0
// Baca data dari data/products.csv dan data/nobody-sound.csv
// Format CSV dari CAPRUX_DATA_v2.xlsx
// ================================================================
window.CAPRUX_DATA = (function () {
  'use strict';

  function parseCSV(text) {
    var lines = text.trim().split('\n');
    var headers = splitLine(lines[0]);
    var rows = [];
    for (var i = 1; i < lines.length; i++) {
      var line = lines[i].trim();
      if (!line) continue;
      var vals = splitLine(line);
      var obj = {};
      headers.forEach(function(h, idx) {
        obj[h.trim()] = (vals[idx] || '').trim();
      });
      // Skip baris kosong (id tidak ada)
      if (obj.id) rows.push(obj);
    }
    return rows;
  }

  function splitLine(line) {
    var result = [], cur = '', inQ = false;
    for (var i = 0; i < line.length; i++) {
      var ch = line[i];
      if (ch === '"') { inQ = !inQ; continue; }
      if (ch === ',' && !inQ) { result.push(cur); cur = ''; continue; }
      cur += ch;
    }
    result.push(cur);
    return result;
  }

  function fetchCSV(path) {
    var bust = new Date().toISOString().slice(0,10).replace(/-/g,'');
    return fetch(path + '?v=' + bust).then(function(r) {
      if (!r.ok) throw new Error('Gagal fetch ' + path);
      return r.text();
    });
  }

  // ── Produk: parse var_stok "M-Hitam=10,L-Hitam=8" → objek ──
  function parseStok(varStokStr) {
    if (!varStokStr) return {};
    var result = {};
    varStokStr.split(',').forEach(function(item) {
      var parts = item.trim().split('=');
      if (parts.length === 2) result[parts[0].trim()] = parseInt(parts[1]) || 0;
    });
    return result;
  }

  function rowToProduct(row) {
    var sizes  = row.var_size  ? row.var_size.split(',').map(function(s){return s.trim();})  : ['M','L','XL'];
    var colors = row.var_warna ? row.var_warna.split(',').map(function(s){return s.trim();}) : [];
    var stok   = parseStok(row.var_stok);

    return {
      id:       row.id,
      name:     row.name,
      type:     row.type,
      badge:    '// ' + row.type,
      desc:     row.desc,
      price:    row.price,
      status:   row.status || 'soon',
      shopeeUrl: row.shopee_url || '',
      image:    row.image1,
      images:   [row.image1, row.image2, row.image3, row.image4].filter(Boolean),
      sizes:    sizes,
      colors:   colors,
      stok:     stok,
      // Legacy compat fields (dipakai script.js lama)
      tag:      '// ' + row.type,
      fullDesc: row.desc,
      specs:    [],
      details:  [],
      sizeGuide: null,
      care:     [],
      tags:     [],
      related:  []
    };
  }

  function rowToGuest(row) {
    var socials = [];
    if (row.ig)        socials.push({ platform: 'Instagram', url: 'https://instagram.com/' + row.ig.replace('@','') });
    if (row.tiktok)    socials.push({ platform: 'TikTok',    url: 'https://tiktok.com/'    + row.tiktok.replace('@','') });
    if (row.whatsapp)  socials.push({ platform: 'WhatsApp',  url: 'https://wa.me/'         + row.whatsapp.replace(/[^0-9]/g,'') });

    return {
      id:         row.id,
      nickname:   row.nickname,
      kategori:   row.kategori,
      jangkauan:  row.jangkauan,
      foto:       row.foto || '',
      socials:    socials,
      deskripsi:  row.deskripsi || ''
    };
  }

  return {
    loadProducts: function() {
      return fetchCSV('data/products.csv').then(function(text) {
        return parseCSV(text).map(rowToProduct);
      });
    },
    loadGuests: function() {
      return fetchCSV('data/nobody-sound.csv').then(function(text) {
        return parseCSV(text).map(rowToGuest);
      });
    }
  };
})();
