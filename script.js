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
// Close networks
let networks = document.getElementById('networks')
function closeList() {
networks.style.display = 'none'
containerRedHome.style.display = 'flex'
filter02.style.display = 'none'
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
}
function hiddenInfo() {
    filter.style.display = 'none'
}
filter.addEventListener('click', hiddenInfo)

// Show settings red and add second filter 
let filter02 = document.getElementById('filter-02')
let containerRedHome = document.getElementById('container-red-home')
function showRed() {
    networks.style.display = 'flex'
    containerRedHome.style.display = 'none'
    filter02.style.display = 'block'
}

// Insert information
let nameNet = document.getElementById('name-net')
let passwordNet = document.getElementById('password-net')
let typeNet = document.getElementById('type-net')
let zone = document.getElementById('zone')
let router = document.getElementById('router')
let gateway = document.getElementById('gateway')
let fMac = document.getElementById('f-mac')
let adminUser = document.getElementById('admin-user')
let adminPassword = document.getElementById('admin-password')

// Zona academica
// Aulas         
function renameInfo() {
    zone.innerHTML = ''
    nameNet.innerHTML = ''
    passwordNet.innerHTML = ''
    typeNet.innerHTML = ''
    router.innerHTML = ''
    gateway.innerHTML = ''
    fMac.innerHTML = ''
    adminUser.innerHTML = ''
    adminPassword.innerHTML = ''
}

function insertElectronicaDigital() {
    zone.innerHTML = 'ELECTRÓNICA DIGITAL <strong>AULA</strong>'
    nameNet.innerHTML = 'DEFAULT'
    passwordNet.innerHTML = 'DEFAULT'
    typeNet.innerHTML = 'DEFAULT'
    router.innerHTML = 'DEFAULT'
    gateway.innerHTML = 'DEFAULT'
    fMac.innerHTML = 'DEFAULT'
    adminUser.innerHTML = 'DEFAULT'
    adminPassword.innerHTML = 'DEFAULT'
}
function insertSoporteTI() {
    zone.innerHTML = 'SOPORTE TI <strong>AULA</strong>'
    nameNet.innerHTML = 'SOPORTE-CJBO'
    passwordNet.innerHTML = 'Cjbo2024**'
    typeNet.innerHTML = 'WIFI'
    router.innerHTML = 'DEFAULT'
    gateway.innerHTML = 'DEFAULT'
    fMac.innerHTML = 'NO ESTABLECIDO'
    adminUser.innerHTML = 'DEFAULT'
    adminPassword.innerHTML = 'DEFAULT'
}
function insertArchivoDocumentacion() {
    zone.innerHTML = 'ARCHIVO Y DOCUMENTACIÓN <strong>AULA</strong>'
    nameNet.innerHTML = 'DEFAULT'
    passwordNet.innerHTML = 'DEFAULT'
    typeNet.innerHTML = 'DEFAULT'
    router.innerHTML = 'DEFAULT'
    gateway.innerHTML = 'DEFAULT'
    fMac.innerHTML = 'DEFAULT'
    adminUser.innerHTML = 'DEFAULT'
    adminPassword.innerHTML = 'DEFAULT'
}
function insertConfeccion() {
    zone.innerHTML = 'CONFECCIÓN <strong>AULA</strong>'
    nameNet.innerHTML = 'DEFAULT'
    passwordNet.innerHTML = 'DEFAULT'
    typeNet.innerHTML = 'DEFAULT'
    router.innerHTML = 'DEFAULT'
    gateway.innerHTML = 'DEFAULT'
    fMac.innerHTML = 'DEFAULT'
    adminUser.innerHTML = 'DEFAULT'
    adminPassword.innerHTML = 'DEFAULT'
}
function insertInfoPanaderia() {
    zone.innerHTML = 'PANADERIA'
    nameNet.innerHTML = 'DEFAULT'
    passwordNet.innerHTML = 'DEFAULT'
    typeNet.innerHTML = 'DEFAULT'
    router.innerHTML = 'DEFAULT'
    gateway.innerHTML = 'DEFAULT'
    fMac.innerHTML = 'DEFAULT'
    adminUser.innerHTML = 'DEFAULT'
    adminPassword.innerHTML = 'DEFAULT'
}
function insertMantenimientoMotos() {
    zone.innerHTML = 'MANTENIMIENTO MOTOS <strong>TALLER</strong>'
    nameNet.innerHTML = 'DEFAULT'
    passwordNet.innerHTML = 'DEFAULT'
    typeNet.innerHTML = 'DEFAULT'
    router.innerHTML = 'DEFAULT'
    gateway.innerHTML = 'DEFAULT'
    fMac.innerHTML = 'DEFAULT'
    adminUser.innerHTML = 'DEFAULT'
    adminPassword.innerHTML = 'DEFAULT'
}
function insertMantenimientoCarros() {
    zone.innerHTML = 'MANTENIMIENTO CARROS <strong>TALLER</strong>'
    nameNet.innerHTML = 'DEFAULT'
    passwordNet.innerHTML = 'DEFAULT'
    typeNet.innerHTML = 'DEFAULT'
    router.innerHTML = 'DEFAULT'
    gateway.innerHTML = 'DEFAULT'
    fMac.innerHTML = 'DEFAULT'
    adminUser.innerHTML = 'DEFAULT'
    adminPassword.innerHTML = 'DEFAULT'
}
function insertInfoArtesCircenses() {
    zone.innerHTML = 'ARTES CIRCENCES <strong>CIRCO</strong>'
    nameNet.innerHTML = 'DEFAULT'
    passwordNet.innerHTML = 'DEFAULT'
    typeNet.innerHTML = 'DEFAULT'
    router.innerHTML = 'DEFAULT'
    gateway.innerHTML = 'DEFAULT'
    fMac.innerHTML = 'DEFAULT'
    adminUser.innerHTML = 'DEFAULT'
    adminPassword.innerHTML = 'DEFAULT'
}
// Zona administrativa
function insertServidor() {
    zone.innerHTML = 'SERVIDOR <strong>SERVIDOR</strong>'
    nameNet.innerHTML = 'DEFAULT'
    passwordNet.innerHTML = 'DEFAULT'
    typeNet.innerHTML = 'DEFAULT'
    router.innerHTML = 'DEFAULT'
    gateway.innerHTML = 'DEFAULT'
    fMac.innerHTML = 'DEFAULT'
    adminUser.innerHTML = 'DEFAULT'
    adminPassword.innerHTML = 'DEFAULT'
}
function insertInfoCoordinacionAcademica() {
    zone.innerHTML = 'COORDINACIÓN ACADEMICA <strong>OFICINA</strong>'
    nameNet.innerHTML = 'DEFAULT'
    passwordNet.innerHTML = 'DEFAULT'
    typeNet.innerHTML = 'DEFAULT'
    router.innerHTML = 'DEFAULT'
    gateway.innerHTML = 'DEFAULT'
    fMac.innerHTML = 'DEFAULT'
    adminUser.innerHTML = 'DEFAULT'
    adminPassword.innerHTML = 'DEFAULT'
}
function insertCoordinacionPastoral() {
    zone.innerHTML = 'COORDINACIÓN PASTORAL <strong>OFICINA</strong>'
    nameNet.innerHTML = 'PASTORAL-CJBO'
    passwordNet.innerHTML = '16494145'
    typeNet.innerHTML = 'WIFI'
    router.innerHTML = 'DEFAULT'
    gateway.innerHTML = '192.168.0.1'
    fMac.innerHTML = 'NO ESTABLECIDO'
    adminUser.innerHTML = 'DEFAULT'
    adminPassword.innerHTML = 'DEFAULT'
}
function insertInfoComedor() {
    zone.innerHTML = 'COMEDOR SEGUNDA PLANTA <strong>COMEDOR</strong>'
    nameNet.innerHTML = 'COCINA CAJOV'
    passwordNet.innerHTML = 'DEFAULT'
    typeNet.innerHTML = 'DEFAULT'
    router.innerHTML = 'DEFAULT'
    gateway.innerHTML = 'DEFAULT'
    fMac.innerHTML = 'DEFAULT'
    adminUser.innerHTML = 'DEFAULT'
    adminPassword.innerHTML = 'DEFAULT'
}
function insertCasaVerde() {
    zone.innerHTML = 'CASA VERDE <strong>CASA</strong>'
    nameNet.innerHTML = 'CASA_VERDE-CJBO'
    passwordNet.innerHTML = 'Cjbo2024**'
    typeNet.innerHTML = 'WIFI'
    router.innerHTML = 'TP LINK'
    gateway.innerHTML = '192.168.0.1'
    fMac.innerHTML = 'NO ESTABLECIDO'
    adminUser.innerHTML = 'Cjbo2024**'
    adminPassword.innerHTML = 'Cjbo2024**'
}