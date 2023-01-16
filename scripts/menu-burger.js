const navbar = document.querySelector('.navbar');
const navbarToggler = document.querySelector('.navbar__opener');
const body = document.querySelector('body');

navbarToggler.addEventListener('click', (e) => {
  navbar.classList.toggle('active');

  if (navbar.classList.contains('active')) {
    body.classList.add('fixed');
  } else {
    body.classList.remove('fixed');
  }
});
