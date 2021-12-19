(() => {
  'use strict';

  let refOffset = 0;
  const bannerHeight = 77;
  const bannerWrapper = document.querySelector('.banner-wrapper');
  const banner = document.querySelector('.banner');

  const handler = () => {
    const newOffset = window.scrollY || window.pageYOffset;

    if (newOffset > bannerHeight) {
      if (newOffset > refOffset) {
        bannerWrapper.classList.remove('animateIn');
        bannerWrapper.classList.add('animateOut');
      } else {
        bannerWrapper.classList.remove('animateOut');
        bannerWrapper.classList.add('animateIn');
      }
      banner.style.background = 'rgba(162, 197, 35, 0.6)';
      refOffset = newOffset;
    } else {
      banner.style.backgroundColor = 'rgba(162, 197, 35, 1)';
    }
  };

  window.addEventListener('scroll', handler, false);
})();
