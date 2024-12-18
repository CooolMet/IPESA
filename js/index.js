const btnBoton = document.getElementById('btnLogin');
const usuario = document.getElementById('txtUsuario');
const contrasena = document.getElementById('txtcontrasena');

btnBoton.addEventListener('click', Inicio);

function Mensaje(mensaje, icono) {
    Swal.fire({
        position: "center",
        icon: icono,
        title: mensaje,
        showConfirmButton: false,
        timer: 1500
    });
}

async function ValidarCampos() {
    const user = usuario.value;
    const pass = contrasena.value;

    if(user === '' && pass === ''){
        Mensaje('Los Campos de Usuario y Contraseña estan Vacios.', 'info');
        usuario.focus();
    }else if(user === ''){
        Mensaje('El Campo de Usuario esta Vacio.', 'info');
        usuario.focus();
    }else if(pass === ''){
        Mensaje('El Campo de Contraseña esta Vacios.', 'info');
        contrasena.focus();
    }else{
        Mensaje('Los campos tienen informacion', 'success');
        Login();
    }
}

function Login() {
    let user = usuario.value;
    let pass = contrasena.value;
    let data = new FormData();

    data.append('usuario', user);
    data.append('password', pass);

// Enviar los datos a un archivo PHP mediante POST
fetch('querys/prueba.php', {
    method: 'POST',
    body: data // Convertir el objeto a JSON
})
.then(response => response) // Esperar respuesta en formato JSON
.then(result => {
    console.log('Respuesta del servidor:', result);
})
.catch(error => {
    console.error('Error:', error);
});
}

function Inicio(e) {
    e.preventDefault();
    ValidarCampos();
}