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
