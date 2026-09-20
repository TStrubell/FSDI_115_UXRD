/* ================================================================
   SGnG — theme.js  |  Dark / Light mode toggle
   Saves preference to localStorage. Persists across all pages.
================================================================ */
(function () {
  'use strict';

  // ── 1. Apply saved theme IMMEDIATELY before page renders ──────
  //    Prevents "flash of wrong theme" on load.
  var saved = localStorage.getItem('sgng-theme');
  if (saved === 'light') {
    document.body.classList.add('light-mode');
  }

  // ── 2. Wire the toggle button after DOM is ready ──────────────
  function init() {
    var btn = document.getElementById('themeToggle');
    if (!btn) return; // No toggle button on this page — skip.

    updateIcon(btn); // Set correct emoji on load

    btn.addEventListener('click', function () {
      document.body.classList.toggle('light-mode');
      var isLight = document.body.classList.contains('light-mode');
      localStorage.setItem('sgng-theme', isLight ? 'light' : 'dark');
      updateIcon(btn);
    });
  }

  // ── 3. Set button emoji + aria-label ─────────────────────────
  function updateIcon(btn) {
    var isLight = document.body.classList.contains('light-mode');
    btn.textContent = isLight ? '☀️' : '🌙';
    btn.setAttribute('aria-label',
      isLight ? 'Switch to dark mode' : 'Switch to light mode');
  }

  // Run after DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
