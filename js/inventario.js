const listDesktop = document.getElementById('list-desktop');
const listLaptop = document.getElementById('list-laptop');
const btnLaptop = document.getElementById('btn-laptop');
const btnDesktop = document.getElementById('btn-desktop');

btnLaptop.addEventListener('click', showLaptop);
btnDesktop.addEventListener('click', showDesktop);

function showDesktop() {
    listLaptop.style.display = 'none';
    listDesktop.style.display = 'flex';
}

function showLaptop() {
    listLaptop.style.display = 'flex';
    listDesktop.style.display = 'none';
}