# Prompt Generator untuk Update Artikel Blog (HTML)

Gunakan prompt di bawah ini setiap kali kamu ingin mengubah artikel dari format Word menjadi format HTML yang sesuai dengan desain website kamu. 

Copy seluruh teks di dalam kotak (termasuk kode HTML) dan paste ke AI (ChatGPT, Gemini, Claude, dll) bersama dengan teks artikel Word kamu.

***

**Copy Prompt Di Bawah Ini:**

```text
Tugas Anda adalah mengubah draf artikel (yang akan saya berikan di akhir) menjadi halaman HTML lengkap yang sesuai dengan struktur dan styling template website saya. 

Berikut adalah panduan dan elemen yang harus kamu ganti/sesuaikan berdasarkan artikel baru:

1. **SEO & Meta Tags:**
   - Ubah `<title>`, `<meta name="description">`, dan `<meta name="keywords">`.
   - Ubah tag Open Graph (`og:title`, `og:description`, `og:url`, `og:image`).
   - Ubah tag Twitter Card (`twitter:title`, `twitter:description`, `twitter:image`).
   - Ubah URL pada `<link rel="canonical" href="...">`.
   - Perbarui tanggal pada JSON-LD Schema `BlogPosting` (`datePublished` dan `dateModified`).
   - Jika artikel memiliki FAQ, perbarui juga JSON-LD Schema `FAQPage`.

2. **Hero Section (`.blog-detail-hero`):**
   - Ubah judul utama `<h1>` (gunakan tag `<span>` untuk menyorot sebagian kata kunci).
   - Perbarui tanggal publish dan estimasi waktu baca (X Min Baca).
   - Perbarui tag/kategori pada `<div class="badge-wrap">`.

3. **Gambar Utama (`.featured-image`):**
   - Sesuaikan atribut `src` dan `alt` pada tag `<img>`. Format penamaan gambar sebaiknya kebab-case (contoh: `judul-artikel.webp`).
   - Sesuaikan teks pada `<div class="caption">`.

4. **Daftar Isi (`.toc-widget`):**
   - Buat daftar isi otomatis `<ol class="toc-main">` berdasarkan heading `<h2>` yang ada di dalam artikel. Pastikan atribut `href="#..."` sesuai dengan `id` pada heading.

5. **Konten Artikel (`.content-body`):**
   - Format semua paragraf dengan tag `<p>`.
   - Gunakan `<h2>` dengan atribut `id="..."` untuk subjudul utama.
   - Gunakan `<ul>` dan `<li>` untuk daftar (bullet points).
   - Jika ada data perbandingan/spesifikasi, gunakan format tabel dengan class `<table class="syarat-table">`.
   - Tambahkan kotak highlight `<div class="highlight-box">` jika ada info penting.
   - Tambahkan bagian "Baca Juga" `<div class="baca-juga">` jika relevan.

6. **Bagian FAQ (`#faq`):**
   - Jika ada pertanyaan umum, format menggunakan struktur `<div class="faq-item">` yang berisi `<div class="faq-q">` dan `<div class="faq-a">`.

7. **Tags & Share (Bagian Bawah):**
   - Perbarui `<div class="blog-tags">` dengan keyword yang relevan.
   - Perbarui URL dan teks pada link share WhatsApp (`.share-btn.whatsapp`).

**PENTING:** 
- JANGAN mengubah struktur CSS (`<style>`), Javascript (GTM, schema), atau struktur Navbar dan Footer.
- Output harus berupa kode HTML lengkap dari `<!DOCTYPE html>` sampai `</html>` agar siap di-copy-paste ke file `.html` baru.

Gunakan struktur HTML berikut sebagai template referensi (Isi dengan artikel baru):

[DI SINI KAMU PASTE KODE HTML DARI FILE 10-merk-pulpen-terbaik-menulis-cepat.html SEBAGAI REFERENSI UNTUK AI]

---
Berikut adalah konten artikel baru saya yang perlu diubah ke dalam format HTML di atas:

[DI SINI KAMU PASTE TEKS ARTIKEL DARI MICROSOFT WORD]
```

***

### Cara Penggunaan:
1. Buka AI (seperti ChatGPT atau Gemini).
2. Copy teks prompt di atas.
3. Pada bagian `[DI SINI KAMU PASTE KODE HTML...]`, masukkan isi lengkap dari file `10-merk-pulpen-terbaik-menulis-cepat.html`.
4. Pada bagian `[DI SINI KAMU PASTE TEKS ARTIKEL DARI MICROSOFT WORD]`, paste teks artikel kamu dari Word.
5. AI akan langsung memberikan file `.html` yang rapi dan sudah mengikuti styling (CSS), SEO, dan struktur website kamu. Kamu tinggal save dengan nama file baru (contoh: `artikel-baru.html`).

***

## Prompt Harian untuk Antigravity (AI Agent)

Karena kamu menggunakan Antigravity IDE yang bisa mengedit file secara langsung, kamu tidak perlu copy-paste kode HTML secara manual lagi. Cukup gunakan **Prompt Harian** ini setiap kali kamu ingin mempublish artikel baru:

**Copy Prompt Di Bawah Ini:**

```text
Tolong proses dan tambahkan artikel baru untuk hari ini. 

Berikut adalah Brief SEO & Konten Artikelnya:
[PASTE BRIEF SEO DAN TEKS ARTIKEL DARI WORD DI SINI]

Tugas kamu sebagai AI Agent:
1. Buat file HTML baru di dalam folder `blog/` dengan penamaan file sesuai URL Slug. Gunakan struktur dan style dari file `blog/Panduan-Pengadaan-Kertas-Gambar-Grosir-untuk-Seni-Budaya-Sekolah.html` sebagai template utama.
2. Pastikan semua tag SEO (Canonical, Open Graph, Twitter, JSON-LD) sudah menggunakan URL dan meta yang baru.
3. Buat gambar ilustrasi baru yang relevan dengan artikel menggunakan tool generate_image.
4. Proses gambar tersebut (resize, kompres max 50KB, format .webp) dan tambahkan watermark teks "alattuliskantor.web.id" berukuran sedang di tengah gambar. Simpan di folder `assets/img/blog/` dengan nama yang sama dengan judul artikel.
5. Tambahkan kartu (card) artikel baru ini ke bagian paling atas grid di dalam file `blog.html`. Pastikan atribut `data-category` disesuaikan agar filter tetap berfungsi.
6. Tambahkan URL artikel baru ini ke dalam file `sitemap.xml`.
```
