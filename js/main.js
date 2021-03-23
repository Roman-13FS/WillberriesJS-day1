const mySwiper = new Swiper('.swiper-container', {
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.slider-button-next',
    prevEl: '.slider-button-prev',
  },
});

// cart

const buttonCart = document.querySelector('.button-cart');
const modalCart = document.querySelector('#modal-cart');
const modalClose = document.querySelector('.modal-close');
// Открыть окно
const openModal = function () {
  modalCart.classList.add('show');
};
// Закрыть окно
const closeModal = function () {
  modalCart.classList.remove('show');
};

buttonCart.addEventListener('click', openModal);

modalCart.addEventListener('click', (event) => {
  const target = event.target;

  if (target.classList.contains('overlay') || target.classList.contains('modal-close')) {
    closeModal();
  }
});

// smooth scrolling

{
  const scrollLinks = document.querySelectorAll('a.scroll-link');

  for (const scrollLink of scrollLinks) {
    scrollLink.addEventListener('click', (event) => {
      event.preventDefault();
      const id = scrollLink.getAttribute('href');
      document.querySelector(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  }
}
