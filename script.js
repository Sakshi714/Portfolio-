// ── NAV SCROLL ─────────────────────────────────
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});

// ── HAMBURGER ──────────────────────────────────
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

// ── SCROLL REVEAL ──────────────────────────────
const revealTargets = [
  '.section-label', '.section-title', '.about-text p',
  '.about-chips', '.about-card', '.skill-card',
  '.timeline-item', '.project-card', '.contact-card',
  '.hero-eyebrow', '.hero-role', '.hero-sub', '.hero-cta', '.hero-stats',
  '.contact-sub', '.btn-lg'
];

function addRevealClass() {
  document.querySelectorAll(revealTargets.join(',')).forEach((el, i) => {
    el.classList.add('reveal');
    // stagger siblings within same parent
    const delay = el.dataset.delay ? el.dataset.delay * 80 : 0;
    el.style.transitionDelay = delay + 'ms';
  });
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

// Run after DOM
window.addEventListener('DOMContentLoaded', () => {
  addRevealClass();
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});

// ── ACTIVE NAV LINK ────────────────────────────
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a, .mobile-menu a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const top = section.offsetTop - 100;
    if (window.scrollY >= top) current = section.id;
  });
  navLinks.forEach(link => {
    link.style.color = '';
    if (link.getAttribute('href') === '#' + current) {
      link.style.color = 'var(--accent)';
    }
  });
});
