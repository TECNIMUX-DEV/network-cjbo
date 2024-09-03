document.getElementById('login').addEventListener('submit', function(event) {
event.preventDefault();

const user = 'SOPORTE';
const pass = 'CJBO-*4202';

const username = document.getElementById('username').value;
const password = document.getElementById('password').value;
let inside = document.getElementById('inside');
let outside = document.getElementById('outside');
let loadingAnimation = document.getElementById('loadingAnimation');
const error = document.getElementById('error');

if (username === user && password === pass) {
        loadingAnimation.style.display = 'flex'
        setTimeout(function() {
            window.location.href = '/html/sffgfhjkllñlkjlkhkjjrwrwew.html';
        }, 2000);

    inside.textContent = 'Usuario y contraseña correctos'
    inside.style.color = '#4CAF50'
    login.style.display = 'none'
}
else {
    outside.style.display = 'flex'
    outside.innerHTML = 'Usuario y contraseña incorrectos'
    error.style.display = 'flex'
    setTimeout(function() {
        window.location.href = '/index.html';
    }, 1000);
}
})