// ================================================================
// CAPRUX — build-stories.js
// Baca semua stories/*.docx  ->  stories/html/NNN.html + stories/stories.json
// Dijalankan otomatis oleh GitHub Actions setiap ada file .docx baru/diubah/dihapus.
//
// Format nama file:  story_001_judul cerita.docx
//   - angka pertama di nama file = nomor urut (001 tampil di atas 002, dst)
//   - sisanya = judul yang tampil di website
//   - awalan "hero_" setelah nomor otomatis dibuang (story_001 hero_tawa -> "Tawa")
// ================================================================
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const mammoth = require('mammoth');

const DIR = 'stories';
const OUT_HTML = path.join(DIR, 'html');
const OUT_IMG = path.join(DIR, 'img');

function warn(msg) { console.log('::warning::' + msg); }

function cleanDir(dir) {
  fs.rmSync(dir, { recursive: true, force: true });
  fs.mkdirSync(dir, { recursive: true });
}

// "story_001 hero_tawa seorang pria.docx" -> { num: 1, title: "Tawa seorang pria" }
function parseName(file) {
  const base = file.replace(/\.docx$/i, '');
  const m = base.match(/\d+/);
  if (!m) return null;
  const num = parseInt(m[0], 10);
  let rest = base.slice(m.index + m[0].length);
  rest = rest.replace(/^[\s_\-.:]+/, '');
  rest = rest.replace(/^hero_+/i, '');
  rest = rest.replace(/_+/g, ' ').replace(/\s+/g, ' ').trim();
  if (!rest) rest = 'Cerita ' + String(num).padStart(3, '0');
  const title = rest.charAt(0).toUpperCase() + rest.slice(1);
  return { num, title };
}

const STYLE_MAP = [
  "p[style-name='Title'] => h2:fresh",
  "p[style-name='Heading 1'] => h2:fresh",
  "p[style-name='Heading 2'] => h3:fresh",
  "p[style-name='Heading 3'] => h4:fresh",
  "p[style-name='Subtitle'] => p.subtitle:fresh",
  "p[style-name='Quote'] => blockquote:fresh",
  "p[style-name='Intense Quote'] => blockquote:fresh",
  "p[style-name='Block Text'] => blockquote:fresh"
];

// Paragraf yang isinya cuma *** / --- / ___ / ・・・ jadi pemisah adegan
const SCENE_RE = /<p>\s*(?:(?:\*\s*){3,}|(?:-\s*){3,}|(?:_\s*){3,}|(?:[·•・]\s*){3,}|(?:#\s*){1,}|—{2,})\s*<\/p>/g;

function tidy(html) {
  return html
    .replace(SCENE_RE, '<div class="scene" role="separator" aria-label="pergantian adegan"></div>')
    .replace(/<p>\s*(?:<br\s*\/?>\s*)*<\/p>/g, '');
}

async function convert(file, id) {
  let n = 0;
  const result = await mammoth.convertToHtml(
    { path: path.join(DIR, file) },
    {
      styleMap: STYLE_MAP,
      convertImage: mammoth.images.imgElement(async (image) => {
        const buf = await image.read();
        const ext = (image.contentType.split('/')[1] || 'png').replace('jpeg', 'jpg').replace(/[^a-z0-9]/gi, '');
        const name = id + '-' + (++n) + '.' + ext;
        fs.writeFileSync(path.join(OUT_IMG, name), buf);
        return { src: 'stories/img/' + name, alt: image.altText || '' };
      })
    }
  );
  result.messages
    .filter((m) => m.type === 'error')
    .forEach((m) => warn(file + ': ' + m.message));
  return tidy(result.value);
}

(async function main() {
  if (!fs.existsSync(DIR)) fs.mkdirSync(DIR, { recursive: true });
  cleanDir(OUT_HTML);
  cleanDir(OUT_IMG);

  const files = fs
    .readdirSync(DIR)
    .filter((f) => /\.docx$/i.test(f) && !f.startsWith('~$'))
    .sort((a, b) => a.localeCompare(b, 'en', { numeric: true }));

  const seen = new Map();
  const stories = [];
  const hash = crypto.createHash('sha1');

  for (const file of files) {
    const info = parseName(file);
    if (!info) { warn('Dilewati (tidak ada angka di nama file): ' + file); continue; }
    if (seen.has(info.num)) {
      warn('Dilewati (nomor ' + info.num + ' sudah dipakai ' + seen.get(info.num) + '): ' + file);
      continue;
    }
    seen.set(info.num, file);

    const id = String(info.num).padStart(3, '0');
    let html;
    try {
      html = await convert(file, id);
    } catch (e) {
      warn('Gagal membaca ' + file + ': ' + e.message);
      continue;
    }

    fs.writeFileSync(path.join(OUT_HTML, id + '.html'), html);
    hash.update(id + html);

    const words = html.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
    stories.push({ id, num: info.num, title: info.title, file: id + '.html', words });
    console.log('OK  ' + id + '  ' + info.title + '  (' + words + ' kata)  <-  ' + file);
  }

  stories.sort((a, b) => a.num - b.num);
  const out = { v: hash.digest('hex').slice(0, 8), stories };
  fs.writeFileSync(path.join(DIR, 'stories.json'), JSON.stringify(out, null, 2) + '\n');
  console.log('Selesai: ' + stories.length + ' cerita.');
})().catch((e) => { console.error(e); process.exit(1); });
