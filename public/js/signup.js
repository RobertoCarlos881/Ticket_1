import Usuario from './classes/usuario.js';
const form = document.getElementById('login');
const email = document.getElementById('email');
const pass = document.getElementById('pass');
const nombres = document.getElementById('nombres');
const apellidos = document.getElementById('apellidos');

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const usuario = new Usuario(email.value, pass.value, nombres.value, apellidos.value);    
    let res = await usuario.signup();
    if(res.hasOwnProperty('error'))
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: res.error
        })
    else {
        Swal.fire({
            icon: 'success',
            title: 'OK!',
            text: 'Usuario registrado'
        })
        setTimeout(() => {
            window.location = '/'
        }, 3000);
    }
        
})