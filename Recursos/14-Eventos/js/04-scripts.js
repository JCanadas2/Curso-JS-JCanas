const formulario = document.querySelector('#formulario');

formulario.addEventListener('sudmit', validarFormulario);

function validarFormulario(e) {
    e.preventDefault();
    console.log('Buscando...');
    console.log(e.target.action);
}
