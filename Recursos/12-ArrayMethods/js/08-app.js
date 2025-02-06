const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas'.toLowerCase(), precio: 500 },
    { nombre: 'Televisión'.toLowerCase(), precio: 100 },
    { nombre: 'Tablet'.toLowerCase(), precio: 200 },
    { nombre: 'Audifonos'.toLowerCase(), precio: 300 },
    { nombre: 'Teclado'.toLowerCase(), precio: 400 },
    { nombre: 'Celular'.toLowerCase(), precio: 700 },
]

const meses2 = ['Agosto', ...meses];
console.log(meses2);

const producto = { nombre: 'Disco Duro', precio: 300};
const carrito2 = [producto, ...carrito ];

console.log(carrito2);