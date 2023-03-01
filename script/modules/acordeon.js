export const acordeon = () => {
  const questions = document.querySelectorAll('.question__item');
  const textWrapper = document.querySelectorAll('.item__text-wrapper');

  questions.forEach((elem, index) => {
    elem.addEventListener('click', () => {
      for (let i = 0; i < textWrapper.length; i += 1) {
        if (index === i) {
          textWrapper[i].classList.toggle('item_active');
          questions[i].classList.toggle('question__item_active');
        } else {
          textWrapper[i].classList.remove('item_active');
          questions[i].classList.remove('question__item_active');
        }
      }
    });
  });
};
