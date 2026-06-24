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
    price: 'Rp 189.000',
    status: 'soon',
    image: 'Kaos_Oblong_CAPRUX.png',
    type: 'Kaos Oblong Premium',
    tag: '// Micro Cotton Danbowl · PRODUK 001',
    fullDesc: 'Kaos oblong premium dengan bahan <strong>Micro Cotton Danbowl</strong> — lembut, adem, dan breathable untuk iklim tropis. Logo <strong>Polyflex 3D Silicon 1mm</strong> timbul, bukan sablon biasa. Setiap detail dibuat tanpa kompromi.',
    specs: [
      { label: 'Bahan', value: 'Micro Cotton Danbowl' },
      { label: 'Gramasi', value: '220 gsm' },
      { label: 'Logo', value: 'Polyflex 3D Silicon 1mm' },
      { label: 'Label', value: 'Woven label neon green hem' },
      { label: 'Potongan', value: 'Regular fit' },
      { label: 'Origin', value: 'Made in Jawabarat 🇮🇩' }
    ],
    details: [
      { title: '// Bahan & Konstruksi', items: [
        'Micro Cotton Danbowl 220 gsm',
        'Pre-shrunk, anti-pilling',
        'Jahitan rantai double needle di bahu',
        'Kerah ribbed 1×1 dengan elastane',
        'Side seam untuk struktur tubuh lebih baik'
      ]},
      { title: '// Logo & Branding', items: [
        'Polyflex 3D Silicon 1mm — timbul, tidak retak',
        'Woven label CAPRUX di hem kiri bawah (neon green)',
        'Heat transfer size label di leher dalam',
        'Tidak ada sablon biasa — semua taktil'
      ]},
      { title: '// Filosofi Produk Ini', items: [
        'Terinspirasi dari panas Baleendah yang menyengat',
        '"Tropical Soul" — jiwa yang tahan banting di iklim apapun',
        'Limited batch, tidak ada restock setelah habis'
      ]}
    ],
    sizeGuide: {
      headers: ['Size', 'Lingkar Dada (cm)', 'Panjang Badan (cm)', 'Lebar Bahu (cm)', 'Panjang Lengan (cm)'],
      rows: [
        ['S', '88–92', '67', '42', '19'],
        ['M', '92–96', '70', '44', '20'],
        ['L', '96–100', '73', '46', '21'],
        ['XL', '100–104', '76', '48', '22'],
        ['XXL', '104–108', '79', '50', '23']
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
    name: 'THE WIND BLOCKER',
    badge: '// Parasut Crincle',
    desc: 'Model Gunung. Bahan Sporty.',
    price: 'Rp 289.750',
    status: 'soon',
    image: 'Jaket_Crincle_CAPRUX.png',
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
        ['S', '92–96', '65', '44', '60'],
        ['M', '96–100', '68', '46', '62'],
        ['L', '100–104', '71', '48', '64'],
        ['XL', '104–108', '74', '50', '66'],
        ['XXL', '108–112', '77', '52', '68']
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
    name: 'NILON RIPSTOP',
    badge: '// The Short Circuit',
    desc: 'For men only. No Boti.',
    price: 'Rp 239.750',
    status: 'soon',
    image: 'Celana_Pendek_CAPRUX.png',
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
        ['S', '70–74', '88–92', '48', '56'],
        ['M', '74–78', '92–96', '50', '58'],
        ['L', '78–82', '96–100', '52', '60'],
        ['XL', '82–86', '100–104', '54', '62'],
        ['XXL', '86–90', '104–108', '56', '64']
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
  open: 'Tersedia',
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
  const grid = document.getElementById('productGrid');
  if (!grid) return;
  
  grid.innerHTML = PRODUCTS.map(p => `
    <a href="product.html?id=${p.id}" class="drop-card">
      <div class="drop-card-img">
        <img src="${p.image}" alt="${p.name}" loading="lazy">
      </div>
      <div class="drop-body">
        <div class="drop-badge">${p.badge}</div>
        <div class="drop-name">${p.name}</div>
        <div class="drop-desc">${p.desc}</div>
        <div class="drop-foot">
          <span class="drop-price">${p.price}</span>
          <span class="drop-status s-${p.status}">${STATUS_LABEL[p.status] || p.status}</span>
        </div>
      </div>
    </a>
  `).join('');
}

// ================================================================
// RENDER PRODUCT DETAIL (product.html)
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
  
  // Title
  document.title = `${product.name} — CAPRUX`;
  
  // Breadcrumb
  const bcCur = document.querySelector('.bc-cur');
  if (bcCur) bcCur.textContent = product.name;
  
  // Gallery
  const mainImg = document.getElementById('mainImg');
  if (mainImg) {
    mainImg.src = product.image;
    mainImg.alt = product.name;
  }
  
  const gTag = document.querySelector('.g-tag');
  if (gTag) gTag.textContent = `// CAPRUX · ${product.tag.replace('//', '').trim()}`;
  
  // Thumbs
  const thumbs = document.querySelectorAll('.thumb');
  thumbs.forEach((thumb, i) => {
    const img = thumb.querySelector('img');
    if (img) {
      img.src = product.image;
      img.alt = product.name;
    }
    thumb.onclick = function() { switchImg(this, product.image); };
  });
  
  // Info
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
// GALLERY
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
// INIT — JALANKAN SAAT DOM SIAP
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
});