// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Nav scroll state
const nav = document.getElementById('nav');
const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 8);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
toggle.addEventListener('click', () => links.classList.toggle('open'));
links.addEventListener('click', e => {
  if (e.target.tagName === 'A') links.classList.remove('open');
});

// Active link on scroll
const navAnchors = [...document.querySelectorAll('.nav-links a')];
const sectionIds = navAnchors.map(a => a.getAttribute('href').slice(1));
const sectionEls = sectionIds.map(id => document.getElementById(id)).filter(Boolean);

const setActive = id => {
  navAnchors.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + id));
};

const spyObserver = new IntersectionObserver(entries => {
  // pick the entry closest to the top that's intersecting
  const visible = entries
    .filter(e => e.isIntersecting)
    .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
  if (visible[0]) setActive(visible[0].target.id);
}, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });

sectionEls.forEach(s => spyObserver.observe(s));

// Reveal on scroll
const revealItems = document.querySelectorAll(
  '.section-head, .about-text, .about-card, .t-item, .card, .pub, .skill-block, .edu-list li, .honor-list li, .contact-card, .contact-lede'
);
revealItems.forEach(el => el.classList.add('reveal'));

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

revealItems.forEach(el => revealObserver.observe(el));
