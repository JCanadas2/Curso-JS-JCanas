const atutenticado = true;

if(autenticado) {
    console.log('El usuario esta autenticado')
}
const puntaje = 450;

function revisarPuntaje() {
    if(puntaje > 400) {
        console.log('Execelnte!!');
        return;
    }

    if (puntaje > 300) {
        console.log('Buen puntaje... felicidades');
        return;
    }
}

revisarPuntaje();