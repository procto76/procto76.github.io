// ---- Before / After toggles ----
// Markup: .compare > [data-show] buttons + [data-pane] panes with matching names.
// Only the visible pane's video plays; switching restarts it from the top.
document.querySelectorAll('.compare').forEach((compare) => {
  const buttons = compare.querySelectorAll('[data-show]');
  const panes = compare.querySelectorAll('[data-pane]');

  const show = (name) => {
    buttons.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.show === name)));
    panes.forEach((pane) => {
      const on = pane.dataset.pane === name;
      pane.classList.toggle('is-active', on);
      pane.setAttribute('aria-hidden', String(!on));
      const video = pane.querySelector('video');
      if (!video) return;
      if (on) {
        video.currentTime = 0;
        video.play().catch(() => {}); // ignore missing files / autoplay blocks
      } else {
        video.pause();
      }
    });
  };

  buttons.forEach((b) => b.addEventListener('click', () => show(b.dataset.show)));
  show(compare.dataset.default || 'before');
});

// ---- Footer year ----
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
