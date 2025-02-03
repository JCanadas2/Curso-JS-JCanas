// Declaración de una cadena de texto
const producto = 'Monitor 20 Pulgadas';

// Imprimir la cadena de texto en la consola
console.log(producto);

// Intentar imprimir la longitud de la cadena de texto, pero hay un error en el nombre de la variable
console.log(producto.length); // Error: 'produto' debería ser 'producto'

// Imprimir la posición de la primera aparición de la subcadena 'Monitor'
console.log(producto.indexOf('Monitor'));

// Imprimir la posición de la primera aparición de la subcadena 'Tablet' (no encontrada, devuelve -1)
console.log(producto.indexOf('Tablet'));

// Imprimir la posición de la primera aparición de la subcadena 'Monitor' nuevamente
console.log(producto.indexOf('Monitor'));