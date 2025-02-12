// window.addEventListener('scroll', () => {
//     console.log('scrolling');
//     const scrollPX = window.scrollY;
//     console.log(scrollPX); // Corregido: console,log -> console.log
// });

// window.addEventListener('scroll', () => { // Corregido: 'scrollPX' -> 'scroll'
//     const scrollPX = window.scrollY;
//     console.log(scrollPX); // Corregido: console,log -> console.log
// });

window.addEventListener('scroll', () => {
    console.clear();
    const premium = document.querySelector('.premium');
    const ubicacion = premium.getBoundingClientRect();

    if(ubicacion.top < 100) {
        console.log('El elemento ya esta visible');
    }else {
        console.log('Aun no, da mas scroll')
    }

    console.log(ubicacion);
})