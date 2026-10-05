import { el } from './dom.js';

export function createModal() {
  const panel = el('div', { className: 'modal__panel' });
  const dialog = el('dialog', {
    className: 'modal',
    children: [panel],
  });
  let lockedScrollY = 0;

  function unlockScroll() {
    document.documentElement.classList.remove('modal-open');
    document.body.classList.remove('modal-open');
    window.scrollTo(0, lockedScrollY);
  }

  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) {
      dialog.close();
    }
  });

  dialog.addEventListener('close', () => {
    unlockScroll();
    requestAnimationFrame(() => {
      window.scrollTo(0, lockedScrollY);
    });
  });

  return {
    root: dialog,
    open(content) {
      if (dialog.open) {
        return;
      }

      panel.replaceChildren(content);
      lockedScrollY = window.scrollY;
      document.documentElement.classList.add('modal-open');
      document.body.classList.add('modal-open');
      dialog.showModal();
    },
    close() {
      if (dialog.open) {
        dialog.close();
      }
    },
  };
}
