let pod = document.querySelector('.pod');
let loginlink = document.querySelector('.login-link');
let registerlink = document.querySelector('.register-link');  // Corregido
let luplogin = document.querySelector('.lup');
let close = document.querySelector('.icon-close');

registerlink.addEventListener('click', () => {
    pod.classList.add('Active');
});

loginlink.addEventListener('click', () => {
    pod.classList.remove('Active');
});

luplogin.addEventListener('click', () => {
    pod.classList.add('Active-Login');  // Se añade la clase Active-Login para mostrar el login
});

close.addEventListener('click', ()=> {
    pod.classList.remove('Active-Login');
})