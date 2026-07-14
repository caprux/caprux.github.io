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
    type: 'Celana Pendek Men's',
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
  const grid = document.getElementById('productGrid');
  if (grid) {
    grid.style.display = 'none'; // sembunyikan grid lama, carousel yang tampil
  }

  const outer    = document.getElementById('productCarousel');
  const dotsWrap = document.getElementById('carouselDots');
  if (!outer || !dotsWrap) return;

  const carouselWrap = outer.closest('.carousel-wrap');
  if (carouselWrap) carouselWrap.style.display = 'flex';

  let activeIdx = 0;

  function getClass(i) {
    const d = i - activeIdx;
    if (d === 0) return 'active';
    if (d === 1 || d === -1) return 'side';
    return 'far';
  }

  outer.innerHTML = PRODUCTS.map((p, i) => {
    const locked = p.status !== 'open'; 
    return `
    <div class="pcard ${getClass(i)}${locked ? ' locked' : ''}" data-idx="${i}">
      ${p.image
        ? `<img class="pcard-img" src="${p.image}" alt="${p.name}" loading="lazy">`
        : `<div class="pcard-placeholder"><span>CPX</span></div>`}
      ${locked ? `<div class="pcard-lock">🔒 ${STATUS_LABEL[p.status] || 'Segera Hadir'}</div>` : ''}
      <div class="pcard-body">
        <div class="pcard-badge">${p.badge}</div>
        <div class="pcard-name">${p.name}</div>
        <div class="pcard-price">${p.price}</div>
      </div>
    </div>
  `;
  }).join('');

  dotsWrap.innerHTML = PRODUCTS.map((_, i) =>
    `<div class="carousel-dot${i === activeIdx ? ' active' : ''}" data-idx="${i}"></div>`
  ).join('');

  function setActive(idx) {
    const prev = activeIdx;
    activeIdx = Math.max(0, Math.min(PRODUCTS.length - 1, idx));
    if (prev === activeIdx) return;

    outer.querySelectorAll('.pcard').forEach((c, i) => {
      const locked = PRODUCTS[i].status !== 'open';
      c.className = 'pcard ' + getClass(i) + (locked ? ' locked' : '');
    });
    dotsWrap.querySelectorAll('.carousel-dot').forEach((d, i) => {
      d.classList.toggle('active', i === activeIdx);
    });
  }

  outer.querySelectorAll('.pcard').forEach((c, i) => {
    c.addEventListener('click', () => {
      if (i !== activeIdx) {
        setActive(i);
        return;
      }
      const p = PRODUCTS[i];
      if (!p || !p.id) return;
      if (p.status !== 'open') {
        c.classList.remove('shake');
        void c.offsetWidth;
        c.classList.add('shake');
        return;
      }
      window.location.href = 'product.html?id=' + p.id;
    });
  });

  dotsWrap.querySelectorAll('.carousel-dot').forEach((d, i) => {
    d.addEventListener('click', () => setActive(i));
  });

  let tStart = 0;
  outer.addEventListener('touchstart', e => { tStart = e.touches[0].clientX; }, { passive: true });
  outer.addEventListener('touchend',   e => {
    const dx = e.changedTouches[0].clientX - tStart;
    if (Math.abs(dx) > 36) dx < 0 ? setActive(activeIdx + 1) : setActive(activeIdx - 1);
  }, { passive: true });

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
  
  document.title = `${product.name} — CAPRUX`;
  
  const bcCur = document.querySelector('.bc-cur');
  if (bcCur) bcCur.textContent = product.name;
  
  const images = product.images || [product.image];
  const mainImg = document.getElementById('mainImg');
  if (mainImg) {
    mainImg.src = images[0] || product.image;
    mainImg.alt = product.name;
  }
  
  const gTag = document.querySelector('.g-tag');
  if (gTag) gTag.textContent = `// CAPRUX · ${product.tag.replace('//', '').trim()}`;
  
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
  
  const notifyBlock = document.querySelector('.notify-block');
  if (notifyBlock && product.status === 'open') {
    notifyBlock.style.display = 'none';
  }
  
  const descEl = document.querySelector('.prod-desc');
  if (descEl) descEl.innerHTML = product.fullDesc;
  
  const specsTbl = document.querySelector('.specs-tbl');
  if (specsTbl) {
    specsTbl.innerHTML = product.specs.map(s => `
      <tr><td>${s.label}</td><td>${s.value}</td></tr>
    `).join('');
  }
  
  const detailGrid = document.querySelector('#t1 .detail-grid');
  if (detailGrid) {
    detailGrid.innerHTML = product.details.map(d => `
      <div class="d-block">
        <div class="d-label">${d.title}</div>
        <ul>${d.items.map(item => `<li>${item}</li>`).join('')}</ul>
      </div>
    `).join('');
  }
  
  const sgTbl = document.querySelector('.sg-tbl');
  if (sgTbl) {
    sgTbl.innerHTML = `
      <thead><tr>${product.sizeGuide.headers.map(h => `<th>${h}</th>`).join('')}</tr></thead>
      <tbody>${product.sizeGuide.rows.map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`).join('')}</tbody>
    `;
  }
  
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
  
  const tagsContainer = document.querySelector('.tags');
  if (tagsContainer) {
    tagsContainer.innerHTML = product.tags.map(t => `<span class="tag">${t}</span>`).join('');
  }
  
  const relatedProducts = getRelatedProducts(id);
  const relGrid = document.querySelector('.rel-grid');
  if (relGrid) {
    if (relatedProducts.length > 0) {
      relGrid.innerHTML = relatedProducts.map(p => {
        const locked = p.status !== 'open';
        const tag = locked ? 'div' : 'a';
        const hrefAttr = locked ? '' : `href="product.html?id=${p.id}"`;
        return `
        <${tag} ${hrefAttr} class="drop-card${locked ? ' locked' : ''}">
          <div class="dc-img"><img src="${p.image}" alt="${p.name}"></div>
          ${locked ? `<div class="pcard-lock">🔒 ${STATUS_LABEL[p.status] || 'Segera Hadir'}</div>` : ''}
          <div class="dc-body">
            <div class="dc-badge">${p.badge}</div>
            <div class="dc-name">${p.name}</div>
            <div class="dc-desc">${p.desc}</div>
            <div class="dc-foot">
              <span class="dc-price">${p.price}</span>
              <span class="status s-${p.status}">${STATUS_LABEL[p.status] || p.status}</span>
            </div>
          </div>
        </${tag}>
      `;
      }).join('');
    } else {
      relGrid.innerHTML = `<p style="color:var(--grey);padding:20px;">Tidak ada produk terkait.</p>`;
    }
  }
}

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

function switchImg(thumb, src) {
  const mainImg = document.getElementById('mainImg');
  if (!mainImg) return;
  mainImg.src = src;
  document.querySelectorAll('.thumb').forEach(t => t.classList.remove('active'));
  thumb.classList.add('active');
}

function pickSize(btn) {
  document.querySelectorAll('.sz').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

function switchTab(btn, tabId) {
  document.querySelectorAll('.tab').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  const pane = document.getElementById(tabId);
  if (pane) pane.classList.add('active');
}

function handleNotify() {
  const input = document.getElementById('notifyEmail');
  if (!input) return;
  const email = input.value.trim();
  if (!email || !email.includes('@')) {
    alert('Masukin email yang bener bro 🙏');
    return;
  }
  const nameEl = document.querySelector('.prod-name');
  const productName = nameEl ? nameEl.textContent.trim() : 'produk';
  alert('Siap! Lo bakal dapet notif pas "' + productName + '" drop.
بسم الله — thanks udah nunggu.');
  input.value = '';
}

document.addEventListener('DOMContentLoaded', function() {
  const isProductPage = window.location.pathname.includes('product.html');
  
  if (isProductPage) {
    renderProductDetail();
  } else {
    renderProducts();
  }
  
  const hamburger = document.getElementById('hamburger');
  if (hamburger) {
    hamburger.addEventListener('click', toggleMenu);
  }
  
  const nav = document.querySelector('nav');
  if (nav) {
    window.addEventListener('scroll', function() {
      nav.classList.toggle('scrolled', window.scrollY > 60);
    }, { passive: true });
  }

  (function heroParallax() {
    const hero = document.getElementById('home');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!hero || reduceMotion) return;

    const grid = hero.querySelector('.hero-grid');
    const scan = hero.querySelector('.hero-scan');
    const logo = hero.querySelector('.main-logo');
    const sub = hero.querySelector('.hero-sub');
    const actions = hero.querySelector('.hero-actions');
    const root = document.documentElement;

    let ticking = false;
    function updateScrollParallax() {
      const y = window.scrollY;
      const heroH = hero.offsetHeight || 1;
      const progress = Math.min(y / heroH, 1.4);
      if (grid) grid.style.setProperty('--px-grid', (progress * 40) + 'px');
      if (scan) scan.style.setProperty('--px-scan', (progress * 70) + 'px');
      if (logo) root.style.setProperty('--px-logo', (progress * 26) + 'px');
      if (sub) sub.style.setProperty('--px-sub', (progress * 14) + 'px');
      if (actions) actions.style.setProperty('--px-actions', (progress * 8) + 'px');
      ticking = false;
    }
    window.addEventListener('scroll', function() {
      if (!ticking) {
        requestAnimationFrame(updateScrollParallax);
        ticking = true;
      }
    }, { passive: true });
    updateScrollParallax();

    if (logo && window.matchMedia('(pointer: fine)').matches) {
      let rafId = null;
      hero.addEventListener('mousemove', function(e) {
        const rect = hero.getBoundingClientRect();
        const relX = (e.clientX - rect.left) / rect.width - 0.5;
        const relY = (e.clientY - rect.top) / rect.height - 0.5;
        if (rafId) return;
        rafId = requestAnimationFrame(function() {
          root.style.setProperty('--tilt-x', (relX * 8).toFixed(2) + 'deg');
          root.style.setProperty('--tilt-y', (-relY * 6).toFixed(2) + 'deg');
          rafId = null;
        });
      });
      hero.addEventListener('mouseleave', function() {
        root.style.setProperty('--tilt-x', '0deg');
        root.style.setProperty('--tilt-y', '0deg');
      });
    }
  })();

  (function scrollProgressBar() {
    const bar = document.getElementById('scrollProgress');
    if (!bar) return;
    let ticking = false;
    function update() {
      const doc = document.documentElement;
      const max = (doc.scrollHeight - doc.clientHeight) || 1;
      const pct = Math.min(100, Math.max(0, (window.scrollY / max) * 100));
      bar.style.width = pct + '%';
      ticking = false;
    }
    window.addEventListener('scroll', function() {
      if (!ticking) { requestAnimationFrame(update); ticking = true; }
    }, { passive: true });
    window.addEventListener('resize', update);
    update();
  })();

  (function cursorGlow() {
    const glow = document.getElementById('cursorGlow');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!glow || reduceMotion || !window.matchMedia('(pointer: fine)').matches) return;

    let targetX = -420, targetY = -420;
    let curX = -420, curY = -420;
    let active = false;

    window.addEventListener('mousemove', function(e) {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!active) { active = true; glow.classList.add('active'); }
    }, { passive: true });

    document.addEventListener('mouseleave', function() {
      active = false;
      glow.classList.remove('active');
    });

    function loop() {
      curX += (targetX - curX) * 0.12;
      curY += (targetY - curY) * 0.12;
      glow.style.setProperty('--cx', curX + 'px');
      glow.style.setProperty('--cy', curY + 'px');
      requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
  })();

  (function scrollReveal() {
    const targets = document.querySelectorAll('.reveal, .reveal-scale, .reveal-left, .reveal-right');
    if (!targets.length) return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion || !('IntersectionObserver' in window)) {
      targets.forEach(function(el) { el.classList.add('in-view'); });
      return;
    }
    const io = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });
    targets.forEach(function(el) { io.observe(el); });
  })();

  (function tiltCards() {
    if (!window.matchMedia('(pointer: fine)').matches) return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    function attachTilt(el, maxDeg, scaleVar) {
      let rafId = null;
      el.addEventListener('mousemove', function(e) {
        const rect = el.getBoundingClientRect();
        const relX = (e.clientX - rect.left) / rect.width - 0.5;
        const relY = (e.clientY - rect.top) / rect.height - 0.5;
        if (rafId) return;
        rafId = requestAnimationFrame(function() {
          el.style.setProperty('--tilt-rx', (relX * maxDeg).toFixed(2) + 'deg');
          el.style.setProperty('--tilt-ry', (-relY * maxDeg).toFixed(2) + 'deg');
          if (scaleVar) el.style.setProperty(scaleVar, '1.025');
          rafId = null;
        });
      });
      el.addEventListener('mouseleave', function() {
        el.style.setProperty('--tilt-rx', '0deg');
        el.style.setProperty('--tilt-ry', '0deg');
        if (scaleVar) el.style.setProperty(scaleVar, '1');
      });
    }

    function initDropCardTilt() {
      document.querySelectorAll('.drop-card').forEach(function(card) {
        if (card.dataset.tiltBound) return;
        card.dataset.tiltBound = '1';
        attachTilt(card, 6, '--tilt-scale');
      });
    }
    initDropCardTilt();
    const relGrid = document.querySelector('.rel-grid');
    if (relGrid) {
      new MutationObserver(initDropCardTilt).observe(relGrid, { childList: true });
    }

    const aboutVisual = document.querySelector('.about-visual');
    if (aboutVisual) {
      let rafId = null;
      aboutVisual.addEventListener('mousemove', function(e) {
        const rect = aboutVisual.getBoundingClientRect();
        const relX = (e.clientX - rect.left) / rect.width - 0.5;
        const relY = (e.clientY - rect.top) / rect.height - 0.5;
        if (rafId) return;
        rafId = requestAnimationFrame(function() {
          aboutVisual.style.setProperty('--about-rx', (relX * 10).toFixed(2) + 'deg');
          aboutVisual.style.setProperty('--about-ry', (-relY * 8).toFixed(2) + 'deg');
          rafId = null;
        });
      });
      aboutVisual.addEventListener('mouseleave', function() {
        aboutVisual.style.setProperty('--about-rx', '0deg');
        aboutVisual.style.setProperty('--about-ry', '0deg');
      });
    }
  })();

  (function aboutLogoTouchGlow() {
    const aboutLogo = document.querySelector('.about-logo-float');
    if (!aboutLogo) return;
    aboutLogo.addEventListener('touchstart', function() {
      aboutLogo.classList.add('touched');
    }, { passive: true });
    aboutLogo.addEventListener('touchend', function() {
      aboutLogo.classList.remove('touched');
    }, { passive: true });
    aboutLogo.addEventListener('touchcancel', function() {
      aboutLogo.classList.remove('touched');
    }, { passive: true });
  })();

  (function philosophyParallax() {
    const phil = document.querySelector('.about-phil-banner');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!phil || reduceMotion) return;
    let ticking = false;
    function update() {
      const rect = phil.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const centered = (rect.top + rect.height / 2 - vh / 2) / vh;
      const offset = Math.max(-1, Math.min(1, -centered)) * 44;
      phil.style.setProperty('--phil-px', offset.toFixed(1) + 'px');
      ticking = false;
    }
    window.addEventListener('scroll', function() {
      if (!ticking) { requestAnimationFrame(update); ticking = true; }
    }, { passive: true });
    window.addEventListener('resize', update);
    update();
  })();

  (function marqueeSkew() {
    const strip = document.querySelector('.marquee-strip');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!strip || reduceMotion) return;
    let lastY = window.scrollY;
    let ticking = false;
    let resetTimer = null;
    window.addEventListener('scroll', function() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function() {
        const y = window.scrollY;
        const delta = y - lastY;
        lastY = y;
        const skew = Math.max(-3.5, Math.min(3.5, delta * 0.25));
        strip.style.setProperty('--marquee-skew', skew.toFixed(2) + 'deg');
        clearTimeout(resetTimer);
        resetTimer = setTimeout(function() {
          strip.style.setProperty('--marquee-skew', '0deg');
        }, 180);
        ticking = false;
      });
    }, { passive: true });
  })();

  window.addEventListener('resize', function() {
    if (window.innerWidth > 900) closeMenu();
  });

  (function() {
    var numEl  = document.getElementById('visitorCount');
    var noteEl = document.getElementById('visitorNote');
    if (!numEl) return;
    var KEY = 'caprux-id_visitor-total-2025';
    numEl.classList.add('loading');
    fetch('https://countapi.mileshilliard.com/api/v1/hit/' + KEY)
      .then(function(r) { return r.json(); })
      .then(function(data) {
        var raw = data && (data.value !== undefined ? data.value : null);
        var val = (raw !== null) ? parseInt(raw, 10) : NaN;
        if (!isNaN(val)) {
          numEl.classList.remove('loading');
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