document.addEventListener('DOMContetntLoaded', function() {
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#email');
    const inputMensaje = document.querySelector('#email');
    console.log('Email: ', inputEmail);
    console.log('asunto: ', inputAsunto);
    console.log('mensaje: ', inputMensaje);

    inputEmail.addEventListener('blur', function(e) {
        console.log(e.target.value);
    });
});