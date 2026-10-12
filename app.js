/* ZOX-T4-002 — Progressive mobile navigation only.
   No analytics, network requests, storage, cookies, forms or personal data. */
(() => {
  'use strict';
  const toggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('site-nav');
  if (!toggle || !nav) return;

  function setOpen(open) {
    nav.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
  }

  toggle.addEventListener('click', () => {
    setOpen(toggle.getAttribute('aria-expanded') !== 'true');
  });

  nav.addEventListener('click', event => {
    if (event.target.closest('a')) setOpen(false);
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      toggle.focus();
    }
  });

  const wide = window.matchMedia('(min-width: 851px)');
  const onWideChange = event => { if (event.matches) setOpen(false); };
  if (wide.addEventListener) wide.addEventListener('change', onWideChange);
  else if (wide.addListener) wide.addListener(onWideChange); // older browser fallback
})();
