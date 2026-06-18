/* ══════════════════════════════════════════
   CAPRUX — product.js
   Dipakai oleh SEMUA halaman produk.
   ═════════════════════════════════════════ */

// ============================================================
// NAV MOBILE
// ============================================================
function toggleMenu(){
  const m = document.getElementById('mobileMenu');
  const h = document.getElementById('hamburger');
  if (!m || !h) return;
  m.classList.toggle('open');
  h.classList.toggle('open');
  document.body.style.overflow = m.classList.contains('open') ? 'hidden' : '';
}

function closeMenu(){
  const m = document.getElementById('mobileMenu');
  const h = document.getElementById('hamburger');
  if (m) m.classList.remove('open');
  if (h) h.classList.remove('open');
  document.body.style.overflow = '';
}

window.addEventListener('resize', () => {
  if (window.innerWidth > 900) closeMenu();
});

// ============================================================
// GALLERY THUMBNAIL SWITCHER
// ============================================================
function switchImg(thumb, src) {
  const mainImg = document.getElementById('mainImg');
  if (mainImg) mainImg.src = src;
  document.querySelectorAll('.thumb').forEach(t => t.classList.remove('active'));
  if (thumb) thumb.classList.add('active');
}

// ============================================================
// SIZE PICKER
// ============================================================
function pickSize(btn) {
  document.querySelectorAll('.sz').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
}

// ============================================================
// TAB SWITCHER
// ============================================================
function switchTab(btn, tabId) {
  document.querySelectorAll('.tab').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
  if (btn) btn.classList.add('active');
  const target = document.getElementById(tabId);
  if (target) target.classList.add('active');
}

// ============================================================
// NOTIFY EMAIL
// ============================================================
function handleNotify(productName) {
  const input = document.getElementById('notifyEmail');
  if (!input) return;
  const email = input.value.trim();
  if (!email || !email.includes('@')) {
    alert('Masukkan email yang valid ya 🙏');
    return;
  }
  alert('Siap! Kamu akan dapat notif saat "' + productName + '" drop.\nبسم الله — terima kasih sudah menunggu.');
  input.value = '';
}

// ============================================================
// RENDER HALAMAN PRODUK (DARI DATA)
// ============================================================
function renderProductPage(productId) {
  const product = getProductData(productId);
  if (!product) {
    document.body.innerHTML = `
      <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:100vh;background:#000;color:#fff;font-family:'Inter',sans-serif;">
        <h1 style="color:var(--green);font-size:2rem;">⚠️ Produk Tidak Ditemukan</h1>
        <p style="color:#888;margin-top:12px;">Produk dengan ID "${productId}" tidak ada di database.</p>
        <a href="index.html" style="color:var(--green);margin-top:20px;text-decoration:none;border:1px solid var(--green);padding:10px 24px;">← Kembali ke Beranda</a>
      </div>
    `;
    return;
  }

  // Update breadcrumb
  const bcCur = document.querySelector('.bc-cur');
  if (bcCur) bcCur.textContent = product.name;

  // Update gallery
  const mainImg = document.getElementById('mainImg');
  if (mainImg) mainImg.src = product.image;
  const gTag = document.querySelector('.g-tag');
  if (gTag) gTag.textContent = product.tag;

  // Update product info
  const prodEyebrow = document.querySelector('.prod-eyebrow');
  if (prodEyebrow) prodEyebrow.textContent = product.tag;
  
  const prodName = document.querySelector('.prod-name');
  if (prodName) prodName.innerHTML = product.name.replace(/ /g, '<br/>');
  
  const prodType = document.querySelector('.prod-type');
  if (prodType) prodType.textContent = product.type;
  
  const price = document.querySelector('.price');
  if (price) price.textContent = product.price;
  
  const prodDesc = document.querySelector('.prod-desc');
  if (prodDesc) prodDesc.innerHTML = product.desc;

  // Update status
  const statusEl = document.querySelector('.status');
  if (statusEl) {
    const statusMap = {
      'soon': 'Coming Soon',
      'open': 'Tersedia',
      'sold': 'Habis'
    };
    statusEl.textContent = statusMap[product.status] || product.status;
    statusEl.className = 'status s-' + product.status;
  }

  // Update specs
  const specTable = document.querySelector('.specs-tbl');
  if (specTable) {
    specTable.innerHTML = product.specs.map(s => 
      `<tr><td>${s.label}</td><td>${s.value}</td></tr>`
    ).join('');
  }

  // Update tags
  const tagsContainer = document.querySelector('.tags');
  if (tagsContainer) {
    tagsContainer.innerHTML = product.tags.map(t => 
      `<span class="tag">${t}</span>`
    ).join('');
  }

  // Update details tabs
  const detailGrid = document.querySelector('.detail-grid');
  if (detailGrid) {
    detailGrid.innerHTML = product.details.map(d => `
      <div class="d-block">
        <div class="d-label">${d.title}</div>
        <ul>${d.items.map(i => `<li>${i}</li>`).join('')}</ul>
      </div>
    `).join('');
  }

  // Update size guide
  const sgBody = document.querySelector('.sg-tbl tbody');
  if (sgBody) {
    sgBody.innerHTML = product.sizeGuide.rows.map(row => 
      `<tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`
    ).join('');
  }

  // Update care
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

  // Update related products
  const relGrid = document.querySelector('.rel-grid');
  if (relGrid) {
    relGrid.innerHTML = product.related.map(relId => {
      const rel = getProductData(relId);
      if (!rel) return '';
      return `
        <a href="${rel.id}.html" class="drop-card">
          <div class="dc-img"><img src="${rel.image}" alt="${rel.name}"/></div>
          <div class="dc-body">
            <div class="dc-badge">${rel.tag.split('·')[0]}</div>
            <div class="dc-name">${rel.name}</div>
            <div class="dc-desc">${rel.specs.find(s => s.label === 'Bahan')?.value || ''}</div>
            <div class="dc-foot">
              <span class="dc-price">${rel.price}</span>
              <span class="status s-${rel.status}">${rel.status === 'soon' ? 'Coming Soon' : rel.status === 'open' ? 'Tersedia' : 'Habis'}</span>
            </div>
          </div>
        </a>
      `;
    }).join('');
  }

  // Update notifikasi produk name
  const notifyBtn = document.querySelector('.notify-btn');
  if (notifyBtn) {
    const oldClick = notifyBtn.getAttribute('onclick');
    if (oldClick) {
      notifyBtn.setAttribute('onclick', `handleNotify('${product.name}')`);
    }
  }
}

// ============================================================
// INISIALISASI — Jalankan saat DOM siap
// ============================================================
document.addEventListener('DOMContentLoaded', function() {
  // Ambil ID produk dari nama file (kaos-oblong.html → kaos-oblong)
  const path = window.location.pathname;
  const filename = path.substring(path.lastIndexOf('/') + 1);
  const productId = filename.replace('.html', '');
  
  // Cek apakah di halaman produk (ada elemen .product-page)
  if (document.querySelector('.product-page')) {
    renderProductPage(productId);
  }
});