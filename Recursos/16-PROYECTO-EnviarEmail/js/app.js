document.addEventListener('DOMContentLoaded', function() {
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    console.log('Email: ', inputEmail);
    console.log('Asunto: ', inputAsunto);
    console.log('Mensaje: ', inputMensaje);

    inputEmail.addEventListener('blur', validar(e) );
    inputAsunto.addEventListener('blur', validar(e) );
    inputMensaje.addEventListener('blur', validar(e) );

    function validar(e) {
        console.log(e.target.value);
    }
});