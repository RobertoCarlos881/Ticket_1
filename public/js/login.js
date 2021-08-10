import Usuario from './classes/usuario.js';
const form = document.getElementById('login');
const email = document.getElementById('email');
const pass = document.getElementById('pass');
const recordar = document.getElementById('recordar');

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const usuario = new Usuario(email.value, pass.value);
    let check = recordar.checked;
    let res = await usuario.login(check)
    
    if(res.hasOwnProperty('error'))
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: res.error
        })
    else
        window.location = '/index'
})