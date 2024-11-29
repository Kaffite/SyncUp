const toggleButton = document.querySelector('.nupu-menu');
const menu = document.querySelector('.menu');

toggleButton.addEventListener('click', () => {
    menu.classList.toggle('peidus');
});