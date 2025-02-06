const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas'.toLowerCase(), precio: 500 },
    { nombre: 'Televisión'.toLowerCase(), precio: 100 },
    { nombre: 'Tablet'.toLowerCase(), precio: 200 },
    { nombre: 'Audifonos'.toLowerCase(), precio: 300 },
    { nombre: 'Teclado'.toLowerCase(), precio: 400 },
    { nombre: 'Celular'.toLowerCase(), precio: 700 },
]

meses.forEach( (mes, i) => {
    if (mes === 'Abril'.toLowerCase()){
        console.log('Ecnontrado en el indice',mes )
    }
})

const indice = meses.findIndex( mes => mes === 'marzo'.toLowerCase());
 
    if(indice === -1) {
        console.log('Mes no encontrado')
    } else {  
    console.log("Se ha encontrado el mes", meses[indice] ,"en la posicion", indice, "del indice meses");
    }


const indice2 = carrito.findIndex( producto => producto.precio === 500 );

    if(indice2 === -1) {
        console.log('Producto no encontrado')
    } else {
        console.log(`El precio ${carrito[indice2].precio} corresponde al producto "${carrito[indice2].nombre}" en la posición ${indice2} del índice "carrito".`);
    }