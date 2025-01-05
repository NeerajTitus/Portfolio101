//ham menu 

const hamIcon = document.querySelector('.hamburger');
const navMenu = document.querySelector('.main-nav');
const body = document.querySelector('body');
const backdrop = document.querySelector('.backdrop');
hamIcon.addEventListener('click', function() {
    this.classList.toggle('is-active');
    navMenu.classList.toggle('nav-open');
    body.classList.toggle('o-hidden');
    backdrop.classList.toggle('active');
})

backdrop.addEventListener('click', function() {
    hamIcon.classList.remove('is-active');
    navMenu.classList.remove('nav-open');
    body.classList.remove('o-hidden');
    backdrop.classList.remove('active');
})