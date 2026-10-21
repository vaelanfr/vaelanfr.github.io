const toggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('.navigation');
if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
  });
  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    menu.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Ouvrir le menu');
  }));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') { menu.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); }
  });
}
const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
