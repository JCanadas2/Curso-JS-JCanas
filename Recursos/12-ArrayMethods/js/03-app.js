const carrito = [
    { nombre: 'Monitor 27 Pulgadas'.toLowerCase(), precio: 500 },
    { nombre: 'Televisión'.toLowerCase(), precio: 100 },
    { nombre: 'Tablet'.toLowerCase(), precio: 200 },
    { nombre: 'Audifonos'.toLowerCase(), precio: 300 },
    { nombre: 'Teclado'.toLowerCase(), precio: 400 },
    { nombre: 'Celular'.toLowerCase(), precio: 700 },
]

let total = 0;
carrito.forEach( producto => total += producto.precio);
console.log(total);

let resultado = carrito.reduce( (total, producto) => total + producto.precio, 2000)
console.log(resultado);