import homeMarquee from './_home-marquee';
import debounce from 'lodash/debounce';


if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function() {
    homeMarquee.init();
    menuBar();
    window.addEventListener('resize', debounce(menuBar, 100), false);
  });
}

function menuBar() {
  const navLinks = document.getElementsByClassName('navigation__item');
  console.log('hi');
  Array.from(navLinks).forEach((link) => {
    const linkBarData = link.getAttribute('data-link-var');
    const linkPosition = link.getBoundingClientRect();
    const linkPositionLeft = linkPosition.left;
    document.documentElement.style.setProperty(`--${linkBarData}`, `${linkPositionLeft}px`);
  });
}