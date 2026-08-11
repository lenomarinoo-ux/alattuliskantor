document.addEventListener('DOMContentLoaded', function () {
  // Tandai menu navbar aktif berdasarkan halaman saat ini
  var current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar-atk .nav-link, .navbar-atk .dropdown-item').forEach(function (link) {
    var href = link.getAttribute('href');
    if (href === current) {
      link.classList.add('active');
      var parentDropdown = link.closest('.dropdown');
      if (parentDropdown) {
        parentDropdown.querySelector('.nav-link').classList.add('active');
      }
    }
  });

  // Filter kategori produk (halaman Produk)
  var chips = document.querySelectorAll('.chip-filter');
  var productItems = document.querySelectorAll('[data-category]');
  function applyFilter(target, chipEl) {
    chips.forEach(function (c) { c.classList.remove('active'); });
    if (chipEl) chipEl.classList.add('active');
    productItems.forEach(function (item) {
      if (target === 'semua' || item.getAttribute('data-category') === target) {
        item.style.display = '';
      } else {
        item.style.display = 'none';
      }
    });
  }
  if (chips.length && productItems.length) {
    chips.forEach(function (chip) {
      chip.addEventListener('click', function () {
        applyFilter(chip.getAttribute('data-filter'), chip);
      });
    });
    // Jika halaman dibuka dari link dropdown kategori (mis. produk.html#meeting)
    var hash = window.location.hash.replace('#', '');
    if (hash) {
      var matchedChip = document.getElementById(hash);
      if (matchedChip && matchedChip.classList.contains('chip-filter')) {
        applyFilter(hash, matchedChip);
        setTimeout(function () {
          matchedChip.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 200);
      }
    }
  }

  // Validasi ringan form kontak + arahkan ke WhatsApp
  var contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!contactForm.checkValidity()) {
        contactForm.classList.add('was-validated');
        return;
      }
      var nama = document.getElementById('cfNama').value;
      var perusahaan = document.getElementById('cfPerusahaan').value;
      var pesan = document.getElementById('cfPesan').value;
      var text = 'Halo Alat Tulis Kantor, saya ' + nama + ' dari ' + perusahaan + '. ' + pesan;
      window.open('https://wa.me/6288989643555?text=' + encodeURIComponent(text), '_blank');
    });
  }

  // Navbar shadow saat scroll
  var nav = document.querySelector('.navbar-atk');
  if (nav) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 10) {
        nav.style.boxShadow = '0 4px 16px rgba(12,38,71,0.10)';
      } else {
        nav.style.boxShadow = '0 1px 0 #e4e9f0';
      }
    });
  }

  // Reveal halus saat elemen masuk viewport
  var revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }
});
