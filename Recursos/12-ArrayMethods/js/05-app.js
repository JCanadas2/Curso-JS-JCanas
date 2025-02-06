const carrito = [
    { nombre: 'Monitor 27 Pulgadas'.toLowerCase(), precio: 500 },
    { nombre: 'Televisión'.toLowerCase(), precio: 100 },
    { nombre: 'Tablet'.toLowerCase(), precio: 200 },
    { nombre: 'Audifonos'.toLowerCase(), precio: 300 },
    { nombre: 'Teclado'.toLowerCase(), precio: 400 },
    { nombre: 'Celular'.toLowerCase(), precio: 700 },
];

let resultado = '';
carrito.forEach((producto, index) => {
    if(producto.nombre === 'Tablet'.toLowerCase()) {
        resultado = carrito[index]
    }
});

console.log(resultado)


const resultado2 = carrito.find( producto => producto.precio === 100);
console.log(resultado2);