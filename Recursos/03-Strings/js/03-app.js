// Declaración de una cadena de texto
const producto = 'Monitor 20 Pulgadas';
const precio = '30 USD';

// Concatenar dos cadenas de texto utilizando el método concat (comentado)
// console.log(producto.concat(precio));
// console.log(producto.concat(' En Descuento'));

// Concatenar dos cadenas de texto utilizando el operador +
console.log(producto + ", con un precio de: " + precio); // Imprime: Monitor 20 Pulgadas Con un precio de: 30 USD

// Concatenar dos cadenas de texto utilizando comas en console.log
console.log("El producto:", producto, "tiene un precio de " + precio); // Imprime: El producto Monitor 20 Pulgadas tiene un precio de 30 USD

// Concatenar dos cadenas de texto utilizando template literals (hay un error en la sintaxis)
console.log(`El producto, ${producto}, tiene un precio de ${precio}`); // Imprime: El producto Monitor 20 Pulgadas tiene un precio de 30 USD