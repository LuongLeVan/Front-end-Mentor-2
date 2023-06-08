const btnOpen = document.querySelector('.btn-open');
const btnClose = document.querySelector('.btn-close');
const menuMobile = document.querySelector('.menu');

btnOpen.addEventListener('click', () => {
    menuMobile.classList.remove('hidden');
    menuMobile.classList.add('block');
    console.log(123);
});

btnClose.addEventListener('click', () => {
    menuMobile.classList.add('hidden');
    menuMobile.classList.remove('block');
    console.log(456);
});