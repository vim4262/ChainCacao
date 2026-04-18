// Menu Mobile
const menuToggle = document.getElementById('mobile-menu');
const navList    = document.getElementById('nav-list');

if (menuToggle && navList) {
  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navList.classList.toggle('active');
    document.body.style.overflow = navList.classList.contains('active') ? 'hidden' : '';
  });

  // Fermer le menu au clic sur un lien
  document.querySelectorAll('#nav-list a').forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.classList.remove('active');
      navList.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
}

const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-up').forEach(el => obs.observe(el));

// Carrousel hero
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const dots   = document.querySelectorAll('.dot');

function goToSlide(n) {
  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');
  currentSlide = n;
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
}

setInterval(() => {
  if (slides.length > 0) {
    goToSlide((currentSlide + 1) % slides.length);
  }
}, 3500);
