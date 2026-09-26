(() => {
  'use strict';
  const dialog = document.querySelector('#preview-dialog');
  const panel = document.querySelector('#preview-panel');
  const preview = document.querySelector('#full-preview');
  const tabs = [...document.querySelectorAll('[data-view]')];
  let trigger;
  function selectView(view, focus = false) {
    const mobile = view === 'mobile';
    tabs.forEach(tab => {
      const active = tab.dataset.view === view;
      tab.setAttribute('aria-selected', String(active));
      tab.tabIndex = active ? 0 : -1;
      if (active && focus) tab.focus();
    });
    panel.setAttribute('aria-labelledby', `tab-${view}`);
    panel.classList.toggle('mobile', mobile);
    preview.src = `assets/${view}.webp`;
    preview.width = mobile ? 390 : 1440;
    preview.height = mobile ? 4004 : 2624;
    preview.alt = `Full SCOOPÉRA ${view} homepage screenshot`;
    panel.scrollTop = 0;
  }
  document.querySelectorAll('[data-open-preview]').forEach(button => {
    button.addEventListener('click', () => {
      trigger = button;
      selectView(button.dataset.openPreview || 'desktop');
      dialog.showModal();
      document.body.classList.add('modal-open');
      document.querySelector('#close-preview').focus();
    });
  });
  document.querySelector('#close-preview').addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => {
    document.body.classList.remove('modal-open');
    trigger?.focus();
  });
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  });
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => selectView(tab.dataset.view));
    tab.addEventListener('keydown', event => {
      if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      const next = event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length - 1 : (index + (event.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
      selectView(tabs[next].dataset.view, true);
    });
  });
  const checkout = window.SCOOPERA_SALES?.checkoutUrl || '';
  if (checkout) {
    try {
      const url = new URL(checkout);
      if (url.protocol !== 'https:') return;
      document.querySelectorAll('[data-checkout]').forEach(link => {
        link.href = url.href;
        link.hidden = false;
      });
      document.querySelector('#checkout-unavailable').hidden = true;
      document.querySelector('#checkout-note').textContent = 'Continue to Gumroad checkout to review your total.';
    } catch (_) { /* Preserve the honest, unavailable state for invalid links. */ }
  }
})();
