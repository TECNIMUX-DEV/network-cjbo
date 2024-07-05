// List zones LAN
let containerAulas = document.getElementById('container-aulas')
let aulas = document.getElementById('aulas')
let zAdmin = document.getElementById('z-admin')
let containerTeatro = document.getElementById('container-teatro')
let teatro = document.getElementById('teatro')
function showSubmenuZAcad() {
    containerAulas.style.display = 'block'
}
function showSubmenuAulas() {
    aulas.style.display = 'block'
}
function showSubmenuZAdmi() {
    zAdmin.style.display = 'block'
    containerTeatro.style.display = 'block'
}
function showSubmenuAudiVisu() {
    teatro.style.display = 'block'
}

// Add lines nav ul
let titleZAdmi = document.getElementById('title-z-admi')
let titleZAcad = document.getElementById('title-z-acad')
function addLineButtomNav01() {
    titleZAdmi.classList.add('border-bottom-ul')
}
function addLineButtomNav02() {
    titleZAcad.classList.add('border-bottom-ul') 
}

// Show all items
let btnShowAllItems = document.getElementById('btn-show-all-items')
let btnHiddenAllItems = document.getElementById('btn-hidden-all-items')
let close = document.getElementById('close')
function showAllItems() {
        containerAulas.style.display = 'block'
    aulas.style.display = 'block'
        zAdmin.style.display = 'block'
    containerTeatro.style.display = 'block'
        teatro.style.display = 'block'
        btnShowAllItems.style.display = 'none'
        btnHiddenAllItems.style.display = 'inline-block'
        titleZAdmi.classList.add('border-bottom-ul')
        titleZAcad.classList.add('border-bottom-ul') 
        close.style.display = 'none'
}
// Show info buttons
let infoShow = document.getElementById('info-show')
let infoHidden = document.getElementsByClassName('info-hidden')
function showInfo() {
 infoShow.style.display = 'inline-block'
}
function hiddenInfo() {
 infoHidden.style.display = 'inline-block'
}
function showInfoRemove() {
    infoShow.style.display = 'none'
}
// Close lnetworks
let networks = document.getElementById('networks')
function closeList() {
networks.style.display = 'none'
containerRedHome.style.display = 'flex'
}
// Close all items
function closeAllItems() {
    containerAulas.style.display = 'none'
aulas.style.display = 'none'
    zAdmin.style.display = 'none'
containerTeatro.style.display = 'none'
    teatro.style.display = 'none'
    btnShowAllItems.style.display = 'inline-block'
            btnHiddenAllItems.style.display = 'none'
            titleZAdmi.classList.remove('border-bottom-ul')
            titleZAcad.classList.remove('border-bottom-ul')
            close.style.display = 'inline-flex'
}
// Show information red
let filter = document.getElementById('filter')
let containerCard = document.getElementById('container-card')
let card = document.getElementById('card')

function showInfoElecDigi() {
    filter.style.display = 'block'  
    containerCard.style.opacity = '1';
            card.style.opacity = '1';
}
function hiddenInfo() {
    filter.style.display = 'none'  
    containerCard.style.opacity = '0';
            card.style.opacity = '0';
}
filter.addEventListener('click', hiddenInfo)

// Show settings red
let containerRedHome = document.getElementById('container-red-home')
function showRed() {
    networks.style.display = 'block'
    containerRedHome.style.display = 'none'
}