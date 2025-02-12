const nav = document.querySelector('.navegacion');

nav.addEventListener('mouseout', () => {
    console.log('salir de nav');
    nav.style.backgroundColor = 'transparent';
})

nav.addEventListener('mouseenter', () => {
    console.log('entrar nav');
    nav.style.backgroundColor = 'pink';
})