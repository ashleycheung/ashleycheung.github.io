window.addEventListener('load', () => {
  const loadingscreen = document.getElementById('loading-screen');
  // Wait one second
  setTimeout(() => {
    loadingscreen.classList.add('loading-screen-hidden');
    loadingscreen.classList.remove('loading-screen-visible');
  }, 1000);
});