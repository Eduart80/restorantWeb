// Navbar: shrink on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  navbar.style.padding = window.scrollY > 60 ? '0.7rem 3rem' : '1.1rem 3rem';
});

// Fade-in sections on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.about, .menu, .gallery, .reserve').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
  observer.observe(el);
});

document.querySelectorAll('.about.visible, .menu.visible, .gallery.visible, .reserve.visible');

// Patch: add visible class styles via JS
const style = document.createElement('style');
style.textContent = '.visible { opacity: 1 !important; transform: translateY(0) !important; }';
document.head.appendChild(style);

// Reservation form submit
const form = document.querySelector('.reserve-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = 'Request Sent! We\'ll confirm shortly.';
    btn.style.background = '#5C3317';
    btn.disabled = true;
  });
}
