const mobileBtn = document.getElementById('mobile-cta');
const nav = document.querySelector('nav');
const mobileBtnExit = document.getElementById('mobile-exit');
const navHeroMenu = document.getElementById("nav-close-hero");
const navFeaturesMenu = document.getElementById("nav-close-features");
const navTestimonialsMenu = document.getElementById("nav-close-testimonials");
const navContactMenu = document.getElementById("nav-close-contact");

mobileBtn.addEventListener('click', () => {
    nav.classList.add('menu-btn');
})

mobileBtnExit.addEventListener('click', () => {
    nav.classList.remove('menu-btn');
})

navHeroMenu.addEventListener('click', () => {
    nav.classList.remove('menu-btn');
})

navFeaturesMenu.addEventListener('click', () => {
    nav.classList.remove('menu-btn');
})

navTestimonialsMenu.addEventListener('click', () => {
    nav.classList.remove('menu-btn');
})

navContactMenu.addEventListener('click', () => {
    nav.classList.remove('menu-btn');
})