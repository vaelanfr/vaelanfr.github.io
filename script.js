const toggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('.navigation');
const menuLabels = document.documentElement.lang === 'en'
  ? { open: 'Open menu', close: 'Close menu' }
  : { open: 'Ouvrir le menu', close: 'Fermer le menu' };
if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? menuLabels.close : menuLabels.open);
  });
  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    menu.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', menuLabels.open);
  }));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      menu.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', menuLabels.open);
    }
  });
}
const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
