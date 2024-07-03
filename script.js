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