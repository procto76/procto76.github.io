// ---- Theme toggle ----
// The OS preference is the default. Clicking the button pins a choice
// in localStorage (applied early by the inline script in <head>).
(function () {
  const root = document.documentElement;
  const btn = document.querySelector('.theme-toggle');
  if (!btn) return;

  const systemDark = () => window.matchMedia('(prefers-color-scheme: dark)').matches;
  const current = () => root.dataset.theme || (systemDark() ? 'dark' : 'light');

  btn.addEventListener('click', () => {
    const next = current() === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    try { localStorage.setItem('theme', next); } catch (e) {}
  });
})();

// ---- Footer year ----
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
