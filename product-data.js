// ============================================================
// CAPRUX — Data Produk
// Tambahkan produk baru di sini
// ============================================================

const products = [
  {
    id: 'kaos-oblong',
    name: 'THE TROPICAL SOUL',
    type: 'Kaos Oblong Premium',
    tag: '// Micro Cotton Danbowl · PRODUK 001',
    price: 'Rp 189.000',
    status: 'soon',
    image: 'Kaos_Oblong_CAPRUX.png',
    desc: 'Kaos oblong premium dengan bahan <strong>Micro Cotton Danbowl</strong> — lembut, adem, dan breathable untuk iklim tropis. Logo <strong>Polyflex 3D Silicon 1mm</strong> timbul, bukan sablon biasa. Setiap detail dibuat tanpa kompromi.',
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
    type: 'Jaket Gunung Sporty',
    tag: '// Parasut Crincle · PRODUK 002',
    price: 'Rp 289.750',
    status: 'soon',
    image: 'Jaket_Crincle_CAPRUX.png',
    desc: 'Jaket outdoor dari bahan <strong>Parasut Crincle</strong> — ringan, tahan angin, dan tetap stylish di jalur gunung maupun jalanan kota. Potongan <strong>model gunung</strong> yang fungsional tanpa kehilangan estetika streetwear CAPRUX.',
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
    type: 'Celana Pendek Men\'s',
    tag: '// The Short Circuit · PRODUK 003',
    price: 'Rp 239.750',
    status: 'soon',
    image: 'Celana_Pendek_CAPRUX.png',
    desc: 'Celana pendek dari bahan <strong>Nilon Ripstop</strong> — kuat, tahan sobek, dan ringan. Dibuat khusus untuk pria yang bergerak. <strong>For men only. No Boti.</strong> Saku dalam yang fungsional, potongan yang tidak membatasi gerak.',
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
  },

  // ============================================================
  // ✨ TAMBAHKAN PRODUK BARU DI SINI ✨
  // Copy-paste blok di bawah, sesuaikan datanya
  // ============================================================
  // {
  //   id: 'nama-file-html',
  //   name: 'NAMA PRODUK',
  //   type: 'Jenis Produk',
  //   tag: '// Bahan · PRODUK 004',
  //   price: 'Rp 999.000',
  //   status: 'soon',
  //   image: 'nama_gambar.png',
  //   desc: 'Deskripsi produk...',
  //   specs: [
  //     { label: 'Bahan', value: '...' },
  //     { label: 'Fitur', value: '...' },
  //     { label: 'Origin', value: 'Made in Jawabarat 🇮🇩' }
  //   ],
  //   details: [
  //     { title: '// Detail 1', items: ['Item 1', 'Item 2'] },
  //     { title: '// Detail 2', items: ['Item 1', 'Item 2'] }
  //   ],
  //   sizeGuide: {
  //     headers: ['Size', 'Dada (cm)', 'Panjang (cm)'],
  //     rows: [
  //       ['S', '88–92', '67'],
  //       ['M', '92–96', '70'],
  //       ['L', '96–100', '73']
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

// ============================================================
// Fungsi untuk mendapatkan data produk berdasarkan ID
// ============================================================
function getProductData(productId) {
  return products.find(p => p.id === productId) || null;
}

// ============================================================
// Fungsi untuk mendapatkan semua produk (untuk keperluan lain)
// ============================================================
function getAllProducts() {
  return products;
}