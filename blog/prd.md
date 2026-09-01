# PRD & SOP STANDAR PUBLIKASI ARTIKEL BLOG (ANTI-HALU)
**Website:** `https://alattuliskantor.web.id`  
**Tujuan Dokumen:** Menjadi acuan baku dan panduan operasional wajib (SOP) agar AI / Penulis tidak mengarang data (*anti-halu*), menjaga konsistensi format halaman, penamaan file, optimasi gambar, skema SEO, serta pembaruan filter dan sitemap di setiap sesi pembuatan artikel baru.

---

## 1. ATURAN UTAMA ANTI-HALU & INTEGRITAS DATA

1. **DILARANG MENGARANG DATA DARI INGATAN:**
   - Setiap batch artikel baru wajib membaca dan menyalin parameter brief / Excel asli secara persis:
     - **Judul Artikel (H1)**
     - **Kata Kunci Utama (Focus Keyword)**
     - **Kelompok Silo / Cluster**
     - **Tahap Corong (ToFU / MoFU / BoFU)**
     - **Estimasi Jumlah Kata & Slot Terbit**
     - **Tautan Internal Hub & Spoke serta Teks Jangkar (Anchor Text)**
     - **Meta Description**
2. **DILARANG MEMUTUSKAN SLUG ARBITRER:**
   - Nama file `.html` dan file gambar `.webp` **WAJIB** mengikuti judul artikel (format slug `kebab-case` huruf kecil dipisahkan tanda strip `-`).

---

## 2. ATURAN PENAMAAN FILE & ASET GAMBAR

| Elemen | Format Penamaan | Contoh |
| :--- | :--- | :--- |
| **File HTML Artikel** | `blog/<slug-persis-judul>.html` | `blog/menata-peralatan-meja-rapat-yang-profesional-untuk-menyambut-klien-penting.html` |
| **File Gambar Banner** | `assets/img/blog/<slug-persis-judul>.webp` | `assets/img/blog/menata-peralatan-meja-rapat-yang-profesional-untuk-menyambut-klien-penting.webp` |

### Standar Optimasi Gambar:
- **Format:** WebP (`.webp`).
- **Watermark:** Wajib mencantumkan teks `alattuliskantor.web.id` di posisi **tengah gambar**, ukuran sedang, warna putih semi-transparan dengan kontras outline / bayangan gelap halus (tanpa background box tebal).
- **Ukuran File:** **Maksimal 50 KB** (wajib dikompresi).
- **Resolusi Banner:** Lebar 800px – 960px (rasio 16:9).

---

## 3. STRUKTUR WAJIB FILE ARTIKEL (`blog/<slug-judul>.html`)

Setiap halaman artikel HTML harus memuat blok kode standar berikut secara lengkap:

### A. Bagian `<head>` (SEO & Meta Tags)
1. **Google Tag Manager (GTM)** tracking script.
2. **Meta Tags Dasar:** `<title>`, `<meta name="description">`, `<meta name="keywords">`, `<meta name="robots">`.
3. **Canonical Link:**
   ```html
   <link rel="canonical" href="https://alattuliskantor.web.id/blog/<slug-judul>.html">
   ```
4. **Open Graph & Twitter Cards:** `og:url`, `og:title`, `og:description`, `og:image`, `twitter:url`, `twitter:image`.
5. **Schema Markup JSON-LD (`@graph`):**
   - `@type: Organization` (Alat Tulis Kantor Global Supplier).
   - `@type: BlogPosting` (`headline`, `image`, `datePublished`, `dateModified`, `mainEntityOfPage`).
   - `@type: FAQPage` (memuat minimal 3-4 pertanyaan & jawaban dari isi artikel).
   - `@type: BreadcrumbList` (Beranda $\rightarrow$ Blog $\rightarrow$ Judul Artikel).
6. **Preconnect & CSS:** Google Fonts (Plus Jakarta Sans, Inter, IBM Plex Mono), Bootstrap 5.3.3, Bootstrap Icons, `../assets/css/main.css`.

### B. Bagian `<body>` & Konten Artikel
1. **Navbar:** Menggunakan layout navbar standar yang ada di blog lain (link `../index.html`, `../produk.html`, `../paket.html`, dll.).
2. **Hero Header Blog:**
   - Breadcrumb custom.
   - Heading H1 (dengan aksen `<span>`).
   - Meta Info: Slot terbit, Penulis (Tim Redaksi Distributor ATK), Durasi baca.
   - Badge topik.
3. **Main Content Container (2 Kolom Layout):**
   - **Featured Image** dengan tag `<div class="featured-image">` dan `caption`.
   - **Daftar Isi (TOC)**: Widget interaktif dengan ID anchor heading `#...` yang dapat di-collapse dan smooth-scrolling.
   - **Badan Teks:**
     - Sub-heading `<h2>` bernomor dan `<h3>`.
     - `highlight-box` untuk catatan/poin penting.
     - `case-study-box` untuk studi kasus relevan.
     - `syarat-table` untuk tabel checklist, perbandingan, atau estimasi anggaran.
     - `baca-juga` box yang memuat 3 internal link artikel terkait.
     - **Tautan Internal Wajib:** Link anchor teks sesuai brief ke halaman hub/spoke dan produk/tentang-kami.
     - **Section FAQ Accordion** interaktif.
     - **Author Box** & **Blog Tags**.
     - **Tombol Share** (WhatsApp, Facebook, LinkedIn) yang mengarah ke URL artikel baru.
4. **Sidebar Kanan:**
   - Promo Widget paket terkait.
   - Widget Artikel Terkait (3 item dengan thumbnail & tanggal).
   - Widget Kontak & Layanan Pengadaan.
5. **Bottom Recommendation:**
   - Menampilkan 3 kartu paket ATK terkait (`../detail-paket-....html`).
6. **CTA WhatsApp Section:**
   - Tombol pesan prefilled WhatsApp `https://wa.me/6288989643555`.
7. **Footer:** Footer 4 kolom standar dengan jaringan situs `maroonatk.web.id`.
8. **Scripts:** Bootstrap bundle, `../js/script.js`, dan fungsi script `toggleTOC()`.

---

## 4. PROSEDUR UPDATE [blog.html](file:///e:/Magang/boostrap/alat-tulis-kantor/blog.html)

Setiap artikel baru diterbitkan, halaman induk `blog.html` **WAJIB** diperbarui:

1. **Tambahkan Kartu Artikel di Baris Paling Atas Grid (`.blog-grid`):**
   ```html
   <!-- Article: <Hari / Slot> -->
   <div class="col-lg-4 col-md-6" data-category="<kategori>" data-aos="fade-up" data-aos-delay="0">
     <div class="blog-card">
       <div class="blog-img">
         <img src="assets/img/blog/<slug-judul>.webp" alt="<Judul Artikel>" loading="lazy" decoding="async">
       </div>
       <div class="blog-body">
         <span class="blog-meta"><i class="bi <icon>"></i> <Nama Kategori></span>
         <h5><a href="blog/<slug-judul>.html"><Judul Artikel></a></h5>
         <p class="blog-excerpt"><Meta Description / Ringkasan Singkat></p>
         <a href="blog/<slug-judul>.html" class="read-more">Baca Selengkapnya <i class="bi bi-arrow-right"></i></a>
       </div>
     </div>
   </div>
   ```
2. **Kategori Valid untuk `data-category`:**
   - `kantor` : Perlengkapan & Arsip Kantor
   - `sekolah` : ATK Sekolah & PAUD/TK
   - `procurement` : Procurement, SOP, B2B & Manajemen
   - `pemerintah` : Pengadaan Pemerintah, E-Katalog & TKDN
   - `produk` : Produk, Kertas & Pulpen
   - `lokasi` : Wilayah / Regional (Surabaya, Malang, Jabodetabek)
3. **Sinkronisasi Widget Filter (Sidebar Desktop & Drawer Offcanvas):**
   - Pastikan badge jumlah artikel (`.filter-count`) pada tombol kategori di sidebar dan offcanvas terupdate.
   - Tambahkan chip tag baru pada widget **Tag Populer** jika terdapat topik spesifik baru.

---

## 5. PROSEDUR UPDATE [sitemap.xml](file:///e:/Magang/boostrap/alat-tulis-kantor/sitemap.xml)

Tambahkan entri `<url>` baru sebelum tag penutup `</urlset>`:

```xml
  <url>
    <loc>https://alattuliskantor.web.id/blog/<slug-judul>.html</loc>
    <lastmod>YYYY-MM-DD</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
```

---

## 6. CHECKLIST AUDIT & VERIFIKASI SEBELUM SELESAI (QA)

- [ ] **Slug HTML**: Apakah nama file sama persis dengan judul artikel (kebab-case)?
- [ ] **Slug Gambar**: Apakah nama gambar WebP sama persis dengan judul artikel?
- [ ] **Watermark**: Apakah gambar banner sudah ada watermark `alattuliskantor.web.id` di tengah?
- [ ] **Ukuran Gambar**: Apakah ukuran file WebP $\le$ 50 KB?
- [ ] **Canonical & Schema**: Apakah URL di `<link rel="canonical">` dan JSON-LD sudah menggunakan slug baru?
- [ ] **Internal Links**: Apakah link anchor pilar dan spoke dari brief sudah terpasang?
- [ ] **blog.html**: Apakah kartu artikel sudah masuk di posisi teratas grid dengan `data-category` yang benar?
- [ ] **Filter Check**: Apakah filter kategori desktop & mobile berjalan normal dan menampilkan artikel ini?
- [ ] **sitemap.xml**: Apakah URL artikel baru sudah terdaftar di sitemap?
