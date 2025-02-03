// Declaración de una cadena de texto con espacios en blanco al inicio y al final
const producto = '          Monitor 20 Pulgadas         ';

// Imprimir la cadena de texto original en la consola
console.log(producto); // Imprime: '          Monitor 20 Pulgadas         '

// Imprimir la longitud de la cadena de texto original
console.log(producto.length); // Imprime: 39 (incluyendo los espacios en blanco)

// Eliminar los espacios en blanco del inicio de la cadena de texto
console.log(producto.trimStart()); // Imprime: 'Monitor 20 Pulgadas         '

// Eliminar los espacios en blanco del final de la cadena de texto
console.log(producto.trimEnd()); // Imprime: '          Monitor 20 Pulgadas'

// Eliminar los espacios en blanco del inicio y del final de la cadena de texto
console.log(producto.trimStart().trimEnd()); // Imprime: 'Monitor 20 Pulgadas'

// Eliminar los espacios en blanco del inicio y del final de la cadena de texto utilizando trim()
console.log(producto.trim()); // Imprime: 'Monitor 20 Pulgadas'