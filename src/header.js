
// Stores the last scroll
let lastScroll = document.body.scrollTop;

const renderHeader = () => {
  for (const e of document.getElementsByClassName('header')) {
    if (document.body.scrollTop > lastScroll) {
      e.classList.add('header-hide');
      e.classList.remove('header-show');
    } else {
      e.classList.add('header-show');
      e.classList.remove('header-hide');
    }
  }
  lastScroll = document.body.scrollTop;
}

// On scroll check if at top
window.addEventListener('scroll', renderHeader)
renderHeader();