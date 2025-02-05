const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión 55 Pulgadas', precio: 700 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Audifonos', precio: 200 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Celular', precio: 500 },
]

for(let i = 0; i < carrito.length; i++) {
    if(carrito[i].descuento) {
        console.log(`El artículo ${carrito[i].nombre} tiene descuento... `);
        continue;
    }
    console.log(carrito[i].nombre);

}