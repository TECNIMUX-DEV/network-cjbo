// const listDesktop = document.getElementById('list-desktop');
// const listLaptop = document.getElementById('list-laptop');
// const btnLaptop = document.getElementById('btn-laptop');
// const btnDesktop = document.getElementById('btn-desktop');

// btnLaptop.addEventListener('click', showLaptop);
// btnDesktop.addEventListener('click', showDesktop);

// function showDesktop() {
//     listLaptop.style.display = 'none';
//     listDesktop.style.display = 'flex';
// }

// function showLaptop() {
//     listLaptop.style.display = 'flex';
//     listDesktop.style.display = 'none';
// }

// Show areas menu
const btnOpenAreas = document.getElementById('btn-open-areas');
const containerAreas = document.getElementById('container-areas');

let isOpen = false;
btnOpenAreas.addEventListener('click', () => {
    if (isOpen) {
        containerAreas.style.display = 'none';
        isOpen = false;
    } else {
        containerAreas.style.display = 'block';
        isOpen = true;
    }
})