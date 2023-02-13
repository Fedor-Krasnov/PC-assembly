const burgerElement = document.querySelector('.burger');
const modalElement = document.querySelector('.modal');
const closeModalElement = document.querySelector('.close-modal img');
const modalLink = document.querySelectorAll('.modal a');

const closeModal = () => {
  modalElement.classList.remove('modal_open');
  document.body.classList.remove('no-scroll');
};

burgerElement.addEventListener('click', () => {
  modalElement.classList.add('modal_open');
  document.body.classList.add('no-scroll');
});

closeModalElement.addEventListener('click', () => closeModal());

modalLink.forEach((element) => {
  element.addEventListener('click', () => closeModal());
});
