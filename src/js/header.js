(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
    body: document.querySelector('body'),
    menuList: document.querySelector('.mob-menu-nav'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  refs.menuList.addEventListener('click', removeMenu);
  document.addEventListener('click', removeMenu);
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      refs.menu.classList.add('is-hidden');
      refs.body.classList.remove('no-scroll');
    }
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1440) {
      refs.menu.classList.add('is-hidden');
      refs.body.classList.remove('no-scroll');
    }
  });

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }

  function removeMenu(event) {
    const clickedEl = event.target;
    const isClickInsideMenu = refs.menu.contains(event.target);
    const isClickOnOpenBtn = refs.openMenuBtn.contains(event.target);

    if (clickedEl.closest('.nav-link') || clickedEl.closest('.header-button')) {
      refs.menu.classList.add('is-hidden');
      refs.body.classList.remove('no-scroll');
    } else if (!isClickInsideMenu && !isClickOnOpenBtn) {
      refs.menu.classList.add('is-hidden');
      refs.body.classList.remove('no-scroll');
    }
  }
})();
