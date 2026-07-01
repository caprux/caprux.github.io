// ================================================================
// CAPRUX — script.js
// SATU SUMBER DATA untuk semua produk
// TAMBAH PRODUK BARU di array PRODUCTS di bawah ini SAJA
// ================================================================

// ================================================================
// DATA PRODUK — ✨ TAMBAH PRODUK BARU DI SINI ✨
// ================================================================
const PRODUCTS = [
  {
    id: 'kaos-oblong',
    name: 'THE TROPICAL SOUL',
    badge: '// Micro Cotton Danbowl',
    desc: 'Polyflex 3D logo silicon 1mm.',
    price: 'Rp 175.750',
    status: 'open',
    shopeeUrl: 'https://id.shp.ee/kc8YJcLh',
    image: 'CPRX-06-SB.png',
    images: [
      'CPRX-06-SB.png',
      'CPRX-06-BK.png',
      'CPRX-04-SB.png',
      'CPRX-04-BK.png'
    ],
    type: 'Kaos Oblong Premium',
    tag: '// Micro Cotton Danbowl · PRODUK 001',
    fullDesc: 'Kaos oblong premium dengan bahan <strong>Micro Cotton Danbowl</strong> — lembut, adem, dan breathable untuk iklim tropis. Logo <strong>Polyflex 3D Silicon 1mm</strong> timbul, bukan sablon biasa. Setiap detail dibuat tanpa kompromi.',
    specs: [
      { label: 'Bahan', value: 'Micro Cotton' },
      { label: 'Gramasi', value: '210 gsm' },
      { label: 'Logo', value: 'Polyflex 3D Silicon 1mm' },
      { label: 'Label', value: 'Woven label neon green hem' },
      { label: 'Potongan', value: 'Regular fit' },
      { label: 'Origin', value: 'Made in Jawabarat 🇮🇩' }
    ],
    details: [
      { title: '// Bahan & Konstruksi', items: [
        'Micro Cotton Danbowl 210 gsm',
        'Lembut, Nyaman, Anti Gerah',
        'Jahitan rantai double needle di bahu',
        'Kerah ribbed 1×1 dengan elastane',
        'Side seam untuk struktur tubuh lebih baik'
      ]},
      { title: '// Logo & Branding', items: [
        'Polyflex 3D Silicon 1mm — timbul, tidak retak',
        'Woven label CAPRUX di hem kiri bawah (neon green)',
        'Heat transfer size label di leher dalam',
        'Disablon DTF manual'
      ]},
      { title: '// Filosofi Produk Ini', items: [
        'Terinspirasi dari panas Bumi yang menyengat',
        '"The Tropical Soul" — sensasi alam indonesia pinggir pantai',
        'Limited product, tidak ada restock setelah habis'
      ]}
    ],
    sizeGuide: {
      headers: ['Size', 'Panjang Badan (cm)', 'Lebar Bahu (cm)','Panjang Lengan (cm)'],
      rows: [
        ['M', '70', '52', '20'],
        ['L', '72', '53', '21'],
        ['XL', '74', '54', '22']
      ]
    },
    care: [
      { icon: '🌊', label: '// Cuci', text: 'Mesin cuci maks 30°C. Balik kain sebelum mencuci agar logo tidak tergesek.' },
      { icon: '🚫', label: '// Jangan Bleach', text: 'Hindari pemutih apapun. Merusak bahan dan warna secara permanen.' },
      { icon: '🌡️', label: '// Setrika', text: 'Suhu rendah-sedang. Jangan setrika langsung di logo Polyflex — gunakan kain pelapis.' },
      { icon: '👕', label: '// Jemur', text: 'Terbalik di tempat teduh. Hindari sinar matahari langsung yang terlalu lama.' }
    ],
    tags: ['#streetwear', '#kaos', '#etnicroot', '#jawabarat', '#caprux'],
    related: ['jaket-crincle', 'celana-pendek']
  },
  {
    id: 'jaket-crincle',
    name: 'THE VOLCANIC SOUL',
    badge: '// Parasut Crincle',
    desc: 'Model Gunung. Bahan Sporty.',
    price: 'Rp 289.750',
    status: 'soon',
    image: 'Jaket_Crincle_CAPRUX.png',
    images: [
      'Jaket_Crincle_CAPRUX.png',
      'Jaket_Crincle_CAPRUX_2.png',
      'Jaket_Crincle_CAPRUX_3.png',
      'Jaket_Crincle_CAPRUX_4.png'
    ],
    type: 'Jaket Gunung Sporty',
    tag: '// Parasut Crincle · PRODUK 002',
    fullDesc: 'Jaket outdoor dari bahan <strong>Parasut Crincle</strong> — ringan, tahan angin, dan tetap stylish di jalur gunung maupun jalanan kota. Potongan <strong>model gunung</strong> yang fungsional tanpa kehilangan estetika streetwear CAPRUX.',
    specs: [
      { label: 'Bahan', value: 'Parasut Crincle' },
      { label: 'Berat', value: 'Lightweight, anti-angin' },
      { label: 'Fitur', value: 'Zipper YKK, hood adjustable' },
      { label: 'Logo', value: 'Embroidery + woven label' },
      { label: 'Potongan', value: 'Regular fit, model gunung' },
      { label: 'Origin', value: 'Made in Jawabarat 🇮🇩' }
    ],
    details: [
      { title: '// Bahan & Konstruksi', items: [
        'Parasut Crincle ringan dan tahan angin',
        'Lining mesh tipis untuk sirkulasi udara',
        'Jahitan taped seam di area kritis',
        'Zipper YKK tahan lama di seluruh bagian',
        'Hood adjustable dengan drawcord'
      ]},
      { title: '// Logo & Branding', items: [
        'Embroidery logo di dada kiri',
        'Woven label CAPRUX di saku kanan',
        'Rubber patch di hem belakang',
        'Zipper pull custom CAPRUX'
      ]},
      { title: '// Filosofi Produk Ini', items: [
        'Untuk yang naik gunung tanpa melepas gaya',
        '"Wind Blocker" — halangi semua yang mau ngecilin kamu',
        'Limited batch, tidak ada restock setelah habis'
      ]}
    ],
    sizeGuide: {
      headers: ['Size', 'Lingkar Dada (cm)', 'Panjang Badan (cm)', 'Lebar Bahu (cm)', 'Panjang Lengan (cm)'],
      rows: [
        ['M', '96–100', '68', '46', '62'],
        ['L', '100–104', '71', '48', '64'],
        ['XL', '104–108', '74', '50', '66']
      ]
    },
    care: [
      { icon: '🌊', label: '// Cuci', text: 'Tangan atau mesin gentle cycle maks 30°C. Jangan diperas terlalu kuat.' },
      { icon: '🚫', label: '// Jangan Dryer', text: 'Hindari mesin pengering. Bahan crincle bisa menyusut dan merusak lapisan.' },
      { icon: '🌡️', label: '// Setrika', text: 'Tidak disarankan setrika langsung. Gantung dan biarkan keriput alami yang jadi karakter bahan.' },
      { icon: '👕', label: '// Jemur', text: 'Gantung terbalik di tempat teduh, angin cukup. Kering sempurna sebelum disimpan.' }
    ],
    tags: ['#streetwear', '#jaket', '#outdoor', '#jawabarat', '#caprux'],
    related: ['kaos-oblong', 'celana-pendek']
  },
  {
    id: 'celana-pendek',
    name: 'THE ARCHIPELAGO SOUL',
    badge: '// Nillon Ripstop',
    desc: 'For men only. No Boti.',
    price: 'Rp 225.750',
    status: 'soon',
    image: 'Celana_Pendek_CAPRUX.png',
    images: [
      'Celana_Pendek_CAPRUX.png',
      'Celana_Pendek_CAPRUX_2.png',
      'Celana_Pendek_CAPRUX_3.png',
      'Celana_Pendek_CAPRUX_4.png'
    ],
    type: 'Celana Pendek Men\'s',
    tag: '// The Short Circuit · Produk 003',
    fullDesc: 'Celana pendek dari bahan <strong>Nilon Ripstop</strong> — kuat, tahan sobek, dan ringan. Dibuat khusus untuk pria yang bergerak. <strong>For men only. No Boti.</strong> Saku dalam yang fungsional, potongan yang tidak membatasi gerak.',
    specs: [
      { label: 'Bahan', value: 'Nilon Ripstop' },
      { label: 'Fitur', value: 'Quick-dry, anti-sobek' },
      { label: 'Saku', value: '2 saku samping + 1 saku belakang' },
      { label: 'Ikat Pinggang', value: 'Drawstring + velcro adjuster' },
      { label: 'Potongan', value: 'Regular fit, panjang di atas lutut' },
      { label: 'Origin', value: 'Made in Jawabarat 🇮🇩' }
    ],
    details: [
      { title: '// Bahan & Konstruksi', items: [
        'Nilon Ripstop — ringan dan tahan sobek',
        'Quick-dry, cocok untuk aktivitas luar ruangan',
        'Jahitan reinforced di area tarikan tinggi',
        'Elastis pinggang dengan drawstring external',
        'Kaki celana dengan flat seam finishing'
      ]},
      { title: '// Logo & Branding', items: [
        'Embroidery patch CAPRUX di paha kiri',
        'Woven label di saku belakang (neon green)',
        'Rubber tab di ikat pinggang kanan'
      ]},
      { title: '// Filosofi Produk Ini', items: [
        '"Short Circuit" — jalan pintas untuk yang bergerak cepat',
        'Dibuat untuk pria yang tidak berhenti bergerak',
        'Limited batch, tidak ada restock setelah habis'
      ]}
    ],
    sizeGuide: {
      headers: ['Size', 'Lingkar Pinggang (cm)', 'Lingkar Pinggul (cm)', 'Panjang Celana (cm)', 'Paha (cm)'],
      rows: [
        ['M', '74–78', '92–96', '50', '58'],
        ['L', '78–82', '96–100', '52', '60'],
        ['XL', '82–86', '100–104', '54', '62']
      ]
    },
    care: [
      { icon: '🌊', label: '// Cuci', text: 'Mesin cuci gentle cycle atau tangan, maks 30°C. Kosongkan saku sebelum mencuci.' },
      { icon: '🚫', label: '// Jangan Bleach', text: 'Bahan nilon sensitif terhadap bahan kimia keras. Hindari pemutih dan fabric softener berbasis silikon.' },
      { icon: '🌡️', label: '// Setrika', text: 'Tidak perlu disetrika — bahan nilon akan menjadi rata secara alami setelah dijemur dan dipakai.' },
      { icon: '👕', label: '// Jemur', text: 'Gantung di tempat teduh. Quick-dry — biasanya kering dalam 1–2 jam di angin terbuka.' }
    ],
    tags: ['#streetwear', '#celana', '#outdoor', '#jawabarat', '#caprux'],
    related: ['kaos-oblong', 'jaket-crincle']
  }

  // ============================================================
  // ✨ TAMBAH PRODUK BARU DI SINI ✨
  // Copy blok di bawah, sesuaikan datanya
  // ============================================================
  // {
  //   id: 'nama-produk',
  //   name: 'NAMA PRODUK',
  //   badge: '// Bahan',
  //   desc: 'Deskripsi singkat.',
  //   price: 'Rp 999.000',
  //   status: 'soon',
  //   image: 'nama_gambar.png',
  //   images: [
  //     'nama_gambar.png',
  //     'nama_gambar_2.png',
  //     'nama_gambar_3.png',
  //     'nama_gambar_4.png'
  //   ],
  //   type: 'Jenis Produk',
  //   tag: '// Bahan · PRODUK 004',
  //   fullDesc: 'Deskripsi lengkap dengan <strong>HTML</strong>.',
  //   specs: [
  //     { label: 'Bahan', value: '...' },
  //     { label: 'Fitur', value: '...' },
  //     { label: 'Origin', value: 'Made in Jawabarat 🇮🇩' }
  //   ],
  //   details: [
  //     { title: '// Judul 1', items: ['Item 1', 'Item 2'] },
  //     { title: '// Judul 2', items: ['Item 1', 'Item 2'] }
  //   ],
  //   sizeGuide: {
  //     headers: ['Size', 'Dada (cm)', 'Panjang (cm)'],
  //     rows: [
  //       ['S', '88–92', '67'],
  //       ['M', '92–96', '70']
  //     ]
  //   },
  //   care: [
  //     { icon: '🌊', label: '// Cuci', text: '...' },
  //     { icon: '🚫', label: '// Jangan', text: '...' }
  //   ],
  //   tags: ['#tag1', '#tag2'],
  //   related: ['kaos-oblong', 'jaket-crincle']
  // }
];

// ================================================================
// FUNGSI UTILITY
// ================================================================
const STATUS_LABEL = {
  soon: 'Coming Soon',
  open: '✓ Tersedia',
  sold: 'Habis'
};

function getProduct(id) {
  return PRODUCTS.find(p => p.id === id) || null;
}

function getRelatedProducts(id) {
  const product = getProduct(id);
  if (!product) return [];
  return product.related.map(relId => getProduct(relId)).filter(Boolean);
}

// ================================================================
// RENDER PRODUCT GRID (index.html)
// ================================================================
function renderProducts() {
  // ── Legacy grid untuk product.html ──
  const grid = document.getElementById('productGrid');
  if (grid) {
    grid.style.display = 'none'; // sembunyikan grid lama, carousel yang tampil
  }

  // ── Carousel untuk index.html ──
  const outer    = document.getElementById('productCarousel');
  const dotsWrap = document.getElementById('carouselDots');
  if (!outer || !dotsWrap) return;

  // Tampilkan wrapper carousel
  const carouselWrap = outer.closest('.carousel-wrap');
  if (carouselWrap) carouselWrap.style.display = 'flex';

  let activeIdx = 0;

  function getClass(i) {
    const d = i - activeIdx;
    if (d === 0) return 'active';
    if (d === 1 || d === -1) return 'side';
    return 'far';
  }

  // Build HTML
  outer.innerHTML = PRODUCTS.map((p, i) => `
    <div class="pcard ${getClass(i)}" data-idx="${i}">
      ${p.image
        ? `<img class="pcard-img" src="${p.image}" alt="${p.name}" loading="lazy">`
        : `<div class="pcard-placeholder"><span>CPX</span></div>`}
      <div class="pcard-body">
        <div class="pcard-badge">${p.badge}</div>
        <div class="pcard-name">${p.name}</div>
        <div class="pcard-price">${p.price}</div>
      </div>
    </div>
  `).join('');

  dotsWrap.innerHTML = PRODUCTS.map((_, i) =>
    `<div class="carousel-dot${i === activeIdx ? ' active' : ''}" data-idx="${i}"></div>`
  ).join('');

  function setActive(idx) {
    const prev = activeIdx;
    activeIdx = Math.max(0, Math.min(PRODUCTS.length - 1, idx));
    if (prev === activeIdx) return;

    outer.querySelectorAll('.pcard').forEach((c, i) => {
      c.className = 'pcard ' + getClass(i);
    });
    dotsWrap.querySelectorAll('.carousel-dot').forEach((d, i) => {
      d.classList.toggle('active', i === activeIdx);
    });
  }

  // Click cards
  outer.querySelectorAll('.pcard').forEach((c, i) => {
    c.addEventListener('click', () => {
      if (i !== activeIdx) {
        setActive(i);
      } else {
        const p = PRODUCTS[i];
        if (p && p.id) window.location.href = 'product.html?id=' + p.id;
      }
    });
  });

  // Click dots
  dotsWrap.querySelectorAll('.carousel-dot').forEach((d, i) => {
    d.addEventListener('click', () => setActive(i));
  });

  // Touch swipe
  let tStart = 0;
  outer.addEventListener('touchstart', e => { tStart = e.touches[0].clientX; }, { passive: true });
  outer.addEventListener('touchend',   e => {
    const dx = e.changedTouches[0].clientX - tStart;
    if (Math.abs(dx) > 36) dx < 0 ? setActive(activeIdx + 1) : setActive(activeIdx - 1);
  }, { passive: true });

  // Mouse drag
  let mStart = 0, dragging = false;
  outer.addEventListener('mousedown', e => { dragging = true; mStart = e.clientX; });
  document.addEventListener('mousemove', e => {
    if (!dragging) return;
    if (Math.abs(e.clientX - mStart) > 36) {
      dragging = false;
      e.clientX - mStart < 0 ? setActive(activeIdx + 1) : setActive(activeIdx - 1);
    }
  });
  document.addEventListener('mouseup', () => { dragging = false; });
}


// ================================================================
// RENDER PRODUCT DETAIL (product.html) — DENGAN MULTIPLE IMAGES
// ================================================================
function renderProductDetail() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const product = getProduct(id);
  
  if (!product) {
    document.body.innerHTML = `
      <div style="display:flex;align-items:center;justify-content:center;min-height:100vh;flex-direction:column;gap:20px;background:#000;color:#fff;font-family:monospace;">
        <h1 style="font-size:3rem;color:#00ff00;">404</h1>
        <p>Produk tidak ditemukan</p>
        <a href="index.html" style="color:#00ff00;text-decoration:underline;">← Kembali ke Beranda</a>
      </div>
    `;
    return;
  }
  
  document.title = `${product.name} — CAPRUX`;
  
  // Breadcrumb
  const bcCur = document.querySelector('.bc-cur');
  if (bcCur) bcCur.textContent = product.name;
  
  // ============================================================
  // GALLERY — support multiple images
  // ============================================================
  const images = product.images || [product.image];
  
  // Main image
  const mainImg = document.getElementById('mainImg');
  if (mainImg) {
    mainImg.src = images[0] || product.image;
    mainImg.alt = product.name;
  }
  
  const gTag = document.querySelector('.g-tag');
  if (gTag) gTag.textContent = `// CAPRUX · ${product.tag.replace('//', '').trim()}`;
  
  // Thumbs
  const thumbs = document.querySelectorAll('.thumb');
  thumbs.forEach((thumb, i) => {
    const img = thumb.querySelector('img');
    const imgSrc = images[i % images.length] || images[0] || product.image;
    if (img) {
      img.src = imgSrc;
      img.alt = product.name;
    }
    thumb.className = 'thumb' + (i === 0 ? ' active' : '');
    thumb.onclick = function() { switchImg(this, imgSrc); };
  });
  
  // ============================================================
  // INFO
  // ============================================================
  const eyebrow = document.querySelector('.prod-eyebrow');
  if (eyebrow) eyebrow.textContent = product.tag;
  
  const nameEl = document.querySelector('.prod-name');
  if (nameEl) nameEl.innerHTML = product.name.replace(/ /g, '<br>');
  
  const typeEl = document.querySelector('.prod-type');
  if (typeEl) typeEl.textContent = product.type;
  
  const priceEl = document.querySelector('.price');
  if (priceEl) priceEl.textContent = product.price;
  
  const statusEl = document.querySelector('.status');
  if (statusEl) {
    statusEl.textContent = STATUS_LABEL[product.status] || product.status;
    statusEl.className = `status s-${product.status}`;
  }
  
  // CTA — kalau open & ada shopeeUrl, aktifkan tombol beli ke Shopee
  const ctaBtn = document.querySelector('.cta-block .btn-primary');
  if (ctaBtn) {
    if (product.status === 'open' && product.shopeeUrl) {
      ctaBtn.textContent = '🛒 Beli Sekarang di Shopee';
      ctaBtn.removeAttribute('disabled');
      ctaBtn.style.cursor = 'pointer';
      ctaBtn.onclick = function() { window.open(product.shopeeUrl, '_blank'); };
    } else if (product.status === 'sold') {
      ctaBtn.textContent = '✕ Stok Habis';
      ctaBtn.setAttribute('disabled', 'true');
    } else {
      ctaBtn.textContent = '⚡ Notify Me — Coming Soon';
      ctaBtn.setAttribute('disabled', 'true');
    }
  }
  
  // Sembunyikan notify block kalau produk sudah open
  const notifyBlock = document.querySelector('.notify-block');
  if (notifyBlock && product.status === 'open') {
    notifyBlock.style.display = 'none';
  }
  
  const descEl = document.querySelector('.prod-desc');
  if (descEl) descEl.innerHTML = product.fullDesc;
  
  // Specs
  const specsTbl = document.querySelector('.specs-tbl');
  if (specsTbl) {
    specsTbl.innerHTML = product.specs.map(s => `
      <tr><td>${s.label}</td><td>${s.value}</td></tr>
    `).join('');
  }
  
  // Details tabs
  const detailGrid = document.querySelector('#t1 .detail-grid');
  if (detailGrid) {
    detailGrid.innerHTML = product.details.map(d => `
      <div class="d-block">
        <div class="d-label">${d.title}</div>
        <ul>${d.items.map(item => `<li>${item}</li>`).join('')}</ul>
      </div>
    `).join('');
  }
  
  // Size Guide
  const sgTbl = document.querySelector('.sg-tbl');
  if (sgTbl) {
    sgTbl.innerHTML = `
      <thead><tr>${product.sizeGuide.headers.map(h => `<th>${h}</th>`).join('')}</tr></thead>
      <tbody>${product.sizeGuide.rows.map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`).join('')}</tbody>
    `;
  }
  
  // Care
  const careGrid = document.querySelector('.care-grid');
  if (careGrid) {
    careGrid.innerHTML = product.care.map(c => `
      <div class="care">
        <div class="care-ico">${c.icon}</div>
        <div class="care-lbl">${c.label}</div>
        <div class="care-txt">${c.text}</div>
      </div>
    `).join('');
  }
  
  // Tags
  const tagsContainer = document.querySelector('.tags');
  if (tagsContainer) {
    tagsContainer.innerHTML = product.tags.map(t => `<span class="tag">${t}</span>`).join('');
  }
  
  // Related products
  const relatedProducts = getRelatedProducts(id);
  const relGrid = document.querySelector('.rel-grid');
  if (relGrid) {
    if (relatedProducts.length > 0) {
      relGrid.innerHTML = relatedProducts.map(p => `
        <a href="product.html?id=${p.id}" class="drop-card">
          <div class="dc-img"><img src="${p.image}" alt="${p.name}"></div>
          <div class="dc-body">
            <div class="dc-badge">${p.badge}</div>
            <div class="dc-name">${p.name}</div>
            <div class="dc-desc">${p.desc}</div>
            <div class="dc-foot">
              <span class="dc-price">${p.price}</span>
              <span class="status s-${p.status}">${STATUS_LABEL[p.status] || p.status}</span>
            </div>
          </div>
        </a>
      `).join('');
    } else {
      relGrid.innerHTML = `<p style="color:var(--grey);padding:20px;">Tidak ada produk terkait.</p>`;
    }
  }
}

// ================================================================
// NAV MOBILE
// ================================================================
function toggleMenu() {
  const m = document.getElementById('mobileMenu');
  const h = document.getElementById('hamburger');
  if (!m || !h) return;
  m.classList.toggle('open');
  h.classList.toggle('open');
  document.body.style.overflow = m.classList.contains('open') ? 'hidden' : '';
}

function closeMenu() {
  const m = document.getElementById('mobileMenu');
  const h = document.getElementById('hamburger');
  if (m) m.classList.remove('open');
  if (h) h.classList.remove('open');
  document.body.style.overflow = '';
}

// ================================================================
// GALLERY — Switch gambar
// ================================================================
function switchImg(thumb, src) {
  const mainImg = document.getElementById('mainImg');
  if (!mainImg) return;
  mainImg.src = src;
  document.querySelectorAll('.thumb').forEach(t => t.classList.remove('active'));
  thumb.classList.add('active');
}

// ================================================================
// SIZE PICKER
// ================================================================
function pickSize(btn) {
  document.querySelectorAll('.sz').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

// ================================================================
// TAB SWITCHER
// ================================================================
function switchTab(btn, tabId) {
  document.querySelectorAll('.tab').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  const pane = document.getElementById(tabId);
  if (pane) pane.classList.add('active');
}

// ================================================================
// NOTIFY
// ================================================================
function handleNotify() {
  const input = document.getElementById('notifyEmail');
  if (!input) return;
  const email = input.value.trim();
  if (!email || !email.includes('@')) {
    alert('Masukkan email yang valid ya 🙏');
    return;
  }
  const nameEl = document.querySelector('.prod-name');
  const productName = nameEl ? nameEl.textContent.trim() : 'produk';
  alert('Siap! Kamu akan dapat notif saat "' + productName + '" drop.\nبسم الله — terima kasih sudah menunggu.');
  input.value = '';
}

// ================================================================
// INIT
// ================================================================
document.addEventListener('DOMContentLoaded', function() {
  const isProductPage = window.location.pathname.includes('product.html');
  
  if (isProductPage) {
    renderProductDetail();
  } else {
    renderProducts();
  }
  
  // Nav hamburger
  const hamburger = document.getElementById('hamburger');
  if (hamburger) {
    hamburger.addEventListener('click', toggleMenu);
  }
  
  // Nav scroll effect
  const nav = document.querySelector('nav');
  if (nav) {
    window.addEventListener('scroll', function() {
      nav.classList.toggle('scrolled', window.scrollY > 60);
    }, { passive: true });
  }
  
  // Close mobile menu on resize
  window.addEventListener('resize', function() {
    if (window.innerWidth > 900) closeMenu();
  });

  // ── VISITOR COUNTER (countapi.mileshilliard.com — pengganti countapi.xyz) ──
  (function() {
    var numEl  = document.getElementById('visitorCount');
    var noteEl = document.getElementById('visitorNote');
    if (!numEl) return;

    // Key unik CAPRUX — jangan ganti setelah live, counter tersimpan di sini
    var KEY = 'caprux-id_visitor-total-2025';

    numEl.classList.add('loading');

    fetch('https://countapi.mileshilliard.com/api/v1/hit/' + KEY)
      .then(function(r) { return r.json(); })
      .then(function(data) {
        // API mengembalikan { key, value } — value bisa string atau number
        var raw = data && (data.value !== undefined ? data.value : null);
        var val = (raw !== null) ? parseInt(raw, 10) : NaN;

        if (!isNaN(val)) {
          numEl.classList.remove('loading');

          // Animasi count-up singkat
          var start = Math.max(0, val - Math.min(val, 60));
          var step  = 16;
          var steps = Math.ceil(900 / step);
          var inc   = (val - start) / steps;
          var cur   = start;
          var timer = setInterval(function() {
            cur += inc;
            if (cur >= val) { cur = val; clearInterval(timer); }
            numEl.textContent = Math.floor(cur).toLocaleString('id-ID');
          }, step);

          if (noteEl) noteEl.textContent = 'Terhitung sejak website diluncurkan · real-time';
        } else {
          numEl.classList.remove('loading');
          numEl.textContent = '—';
          if (noteEl) noteEl.textContent = 'Data tidak tersedia saat ini';
        }
      })
      .catch(function() {
        numEl.classList.remove('loading');
        numEl.textContent = '—';
        if (noteEl) noteEl.textContent = 'Gagal memuat data pengunjung';
      });
  })();
  (function() {
    var overlay = document.getElementById('introOverlay');
    var cnv     = document.getElementById('introCanvas');
    var fl      = document.getElementById('introFlash');
    var skipBtn = document.getElementById('introSkip');
    if (!overlay || !cnv) return;
    var ctx = cnv.getContext('2d');
    var dismissed = false;
    var startTime = Date.now();
    var totalDur  = 6200;

    function resize() { cnv.width = overlay.offsetWidth; cnv.height = overlay.offsetHeight; }
    resize();
    window.addEventListener('resize', resize);

    function rnd(a,b){ return a + Math.random()*(b-a); }

    function drawBolt(x1,y1,x2,y2,rough,depth,alpha,w) {
      if (depth<=0) return;
      var mx=(x1+x2)/2+rnd(-rough,rough), my=(y1+y2)/2+rnd(-rough,rough);
      if (depth===1) {
        ctx.beginPath(); ctx.moveTo(x1,y1); ctx.lineTo(mx,my); ctx.lineTo(x2,y2);
        ctx.strokeStyle='rgba(0,255,0,'+alpha+')'; ctx.lineWidth=w;
        ctx.shadowColor='#00ff00'; ctx.shadowBlur=w*7; ctx.stroke(); ctx.shadowBlur=0;
        if (Math.random()<0.4) {
          var bx=mx+rnd(-70,70), by=my+rnd(20,90);
          ctx.beginPath(); ctx.moveTo(mx,my); ctx.lineTo(bx,by);
          ctx.strokeStyle='rgba(0,255,0,'+(alpha*0.45)+')'; ctx.lineWidth=w*0.4;
          ctx.shadowBlur=4; ctx.shadowColor='#00ff00'; ctx.stroke(); ctx.shadowBlur=0;
        }
      } else {
        drawBolt(x1,y1,mx,my,rough/1.6,depth-1,alpha,w);
        drawBolt(mx,my,x2,y2,rough/1.6,depth-1,alpha,w);
      }
    }

    function doFlash(str) {
      fl.style.transition='opacity 0.03s'; fl.style.opacity=String(Math.min(str*0.13,0.18));
      setTimeout(function(){ fl.style.transition='opacity 0.2s'; fl.style.opacity='0'; },55);
    }

    function strike(intensity) {
      ctx.clearRect(0,0,cnv.width,cnv.height);
      var cx=cnv.width/2, count=1+Math.floor(intensity*3);
      for (var i=0;i<count;i++) {
        var side=Math.random()<0.5?-1:1;
        drawBolt(cx+side*rnd(60,200),0,cx+rnd(-60,60),cnv.height/2+rnd(-40,40),rnd(40,100),5,rnd(0.7,1),rnd(0.8+intensity,1.8+intensity*1.5));
      }
      if (intensity>0.45&&Math.random()<intensity*0.65)
        drawBolt(cx+rnd(-20,20),0,cx+rnd(-10,10),cnv.height/2+rnd(-10,10),rnd(30,70),5,0.95,1.2+intensity);
      doFlash(intensity);
      var fade=1;
      var fo=function(){ fade-=0.07+intensity*0.04; if(fade>0){ctx.globalAlpha=fade;requestAnimationFrame(fo);}else{ctx.globalAlpha=1;ctx.clearRect(0,0,cnv.width,cnv.height);} };
      setTimeout(function(){ requestAnimationFrame(fo); },60+Math.floor((1-intensity)*60));
    }

    function scheduleNext() {
      if (dismissed) return;
      var t=Math.min((Date.now()-startTime)/totalDur,1);
      var minD=t<0.3?1400:t<0.6?800:t<0.85?280:80;
      var maxD=t<0.3?2400:t<0.6?1400:t<0.85?550:180;
      setTimeout(function(){ if(!dismissed){strike(t);scheduleNext();} },rnd(minD,maxD));
    }

    function dismiss() {
      if (dismissed) return; dismissed=true;
      strike(1); strike(1); strike(1); doFlash(1);
      setTimeout(function(){
        overlay.classList.add('fade-out');
        setTimeout(function(){ overlay.remove(); },1000);
      },100);
    }

    setTimeout(scheduleNext, 800);
    setTimeout(dismiss, totalDur);
    if (skipBtn) skipBtn.addEventListener('click', dismiss);
  })();
});
