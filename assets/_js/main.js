import homeMarquee from './_home-marquee';


if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function() {
    homeMarquee.init();

    const navLinks = document.getElementsByClassName('navigation__item');
    Array.from(navLinks).forEach((link) => {
      const linkBarData = link.getAttribute('data-link-var');
      const linkPosition = link.getBoundingClientRect();
      const linkPositionLeft = linkPosition.left;
      document.documentElement.style.setProperty(`--${linkBarData}`, `${linkPositionLeft}px`);
    });
  });
}