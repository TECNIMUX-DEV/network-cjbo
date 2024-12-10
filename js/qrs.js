let $$ = (selector) => document.querySelector(selector);
let $$$ = (selector) => document.querySelectorAll(selector);
const $$$$ = (selector) => document.getElementById(selector);

let qrItem = $$$('.qr-item');

qrItem.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.add('open-qr');
        filterQrs.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });

const filterQrs = $$$$('filter-qrs');
filterQrs.addEventListener('click', () => {
    item.classList.remove('open-qr');
    filterQrs.style.display = 'none';
    document.body.style.overflow = 'auto';
    });
})

// Button top
window.addEventListener('scroll', () => {
let scrollY = window.scrollY;
const btnTop = $$$$('btn-top');
    if(scrollY > 5) {
        btnTop.style.display = 'block';
    } else {
        btnTop.style.display = 'none';
    }
})

