(function () {
  var drawer = document.getElementById('YancyMobileDrawer');
  var openBtn = document.querySelector('[data-yancy-menu-open]');
  var closeBtn = document.querySelector('[data-yancy-menu-close]');

  if (!drawer || !openBtn) return;

  function openDrawer() {
    drawer.setAttribute('data-open', 'true');
    openBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawer.setAttribute('data-open', 'false');
    openBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  openBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);

  drawer.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeDrawer);
  });
})();
