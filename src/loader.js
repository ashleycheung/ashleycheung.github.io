document.onreadystatechange = async () => {
  const loadingscreen = document.getElementById('loading-screen');
  // Wait one second
  await new Promise(r => setTimeout(r, 1000));
  loadingscreen.classList.add('loading-screen-hidden');
  loadingscreen.classList.remove('loading-screen-visible');
}