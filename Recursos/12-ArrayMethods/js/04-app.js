const carrito = [
    { nombre: 'Monitor 27 Pulgadas'.toLowerCase(), precio: 500 },
    { nombre: 'Televisión'.toLowerCase(), precio: 100 },
    { nombre: 'Tablet'.toLowerCase(), precio: 200 },
    { nombre: 'Audifonos'.toLowerCase(), precio: 300 },
    { nombre: 'Teclado'.toLowerCase(), precio: 400 },
    { nombre: 'Celular'.toLowerCase(), precio: 700 },
];

let resultado; 
let resultado2;

resultado = carrito.filter( producto => producto.precio > 400 );

resultado2 = carrito.filter( producto => producto.precio < 600 );

console.log(resultado);
console.log(resultado2);