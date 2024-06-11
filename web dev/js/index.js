const grid = document.querySelector('.container');
const gridItems = [...document.querySelectorAll('.container-item')];
const gridRows = [...document.querySelectorAll('.row')];
const heading = document.querySelector('.heading');

setTimeout(() => {
    heading.classList.add('show');
}, 500);

setTimeout(() => {
    grid.style.opacity = 1
}, 1000);