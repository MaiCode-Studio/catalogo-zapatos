document.querySelectorAll('.site-nav-toggle').forEach((button) => {
  const header = button.closest('header');
  const nav = document.getElementById(button.getAttribute('aria-controls'));
  if (!header || !nav) return;

  const closeMenu = () => {
    button.setAttribute('aria-expanded', 'false');
    header.classList.remove('is-nav-open');
  };

  button.addEventListener('click', () => {
    const open = button.getAttribute('aria-expanded') !== 'true';
    button.setAttribute('aria-expanded', String(open));
    header.classList.toggle('is-nav-open', open);
  });

  nav.addEventListener('click', (event) => {
    if (event.target.closest('a')) closeMenu();
  });

  document.addEventListener('click', (event) => {
    if (!header.contains(event.target)) closeMenu();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });

  window.matchMedia('(min-width: 761px)').addEventListener('change', closeMenu);
});
