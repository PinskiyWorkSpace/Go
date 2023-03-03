const hamburger = document.querySelector('.hamburger ');
const hamburgerItem = document.querySelector('.hamburger__item ');
let startTime = NaN;
const durationOpacity = 500;

const hideOverlay = (timestamp) => {
  startTime ||= timestamp;
  let progress = (timestamp - startTime) / durationOpacity;



  if (hamburgerItem.classList.contains('active')) {
    hamburger.style.opacity = progress;
    if (progress < 1) {
      requestAnimationFrame(hideOverlay);
    } else {
      startTime = NaN;
    }
  } else {
    if (progress < 1) {
      hamburger.style.opacity = 1 - progress;
      requestAnimationFrame(hideOverlay);
    } else {
      startTime = NaN;
      hamburger.classList.remove('visible');
    }
  }

};

hamburgerItem.addEventListener('click', () => {

  hamburgerItem.classList.toggle('active');
  hamburger.classList.add('visible');
  requestAnimationFrame(hideOverlay);
});










