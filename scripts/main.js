setTimeout(() => {
  document.querySelector('header').classList.add('initialized');
}, 500)

const options = {
  rootMargin: '0px',
  threshold: 0.2
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('initialized');
    }
  })
}, options);

document.querySelectorAll('section').forEach((section) => {
  observer.observe(section);
});

const burgerElement = document.querySelector('.burger');
const modalElement = document.querySelector('.modal');
const closeModalElement = document.querySelector('.close-modal img');

burgerElement.addEventListener('click', () => {
  modalElement.classList.add('modal_open');
  document.body.classList.add('no-scroll');
});

closeModalElement.addEventListener('click', () => {
  modalElement.classList.remove('modal_open');
  document.body.classList.remove('no-scroll');
});
