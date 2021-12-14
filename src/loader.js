function createLazyLoad () {
  const lazyElems = document.getElementsByClassName('lazy-load');
  for (const l of lazyElems) {
    // Load element
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        // Load when intersecting
        if (e.isIntersecting) {
          l.src = l.getAttribute('data-src');
          observer.unobserve(l);
          l.classList.add('lazy-loaded');
        }
      });
    });
    observer.observe(l);
  }
}

document.addEventListener('DOMContentLoaded', createLazyLoad);

window.addEventListener('load', () => {
  const loadingscreen = document.getElementById('loading-screen');
  // Wait one second
  setTimeout(() => {
    loadingscreen.classList.add('loading-screen-hidden');
    loadingscreen.classList.remove('loading-screen-visible');
  }, 1000);
});