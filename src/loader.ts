
export function createLazyLoad () {
  const lazyElems = document.getElementsByClassName('lazy-load');
  for (const l of lazyElems) {
    // Load element
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        // Load when intersecting
        if (e.isIntersecting) {
          (l as HTMLImageElement).src = l.getAttribute('data-src')!;
          observer.unobserve(l);
          l.classList.add('lazy-loaded');
        }
      });
    });
    observer.observe(l);
  }
}
