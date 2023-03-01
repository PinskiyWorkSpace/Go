const menuBtn = document.querySelector('.menu__btn');
const overlay = document.querySelector('.overlay');
const close = document.querySelector('.modal__close');


menuBtn.addEventListener('click', () => {
  overlay.style.display = 'flex';
  document.body.style.position = 'fixed';
});

overlay.addEventListener('click', ({target}) => {
  if (target === close || target === overlay) {
    overlay.style.display = 'none';
    document.body.style.position = '';
  }
});


