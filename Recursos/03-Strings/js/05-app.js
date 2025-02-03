const producto = 'Monitor 20 Pulgadas';

// .replace para reemplazar partes de la cadena de texto
console.log(producto); // Imprime: Monitor 20 Pulgadas
console.log(producto.replace('Pulgadas','"')); // Reemplaza 'Pulgadas' con '"' y imprime: Monitor 20 "
console.log(producto.replace('Monitor', 'Monitor Curvo')); // Reemplaza 'Monitor' con 'Monitor Curvo' y imprime: Monitor Curvo 20 Pulgadas

// .slice para cortar partes de la cadena de texto
console.log(producto.slice(0, 10)); // Corta desde el índice 0 al 10 y imprime: Monitor 20
console.log(producto.slice(8)); // Corta desde el índice 8 hasta el final y imprime: 20 Pulgadas
// console.log(producto.slice(2, 1)); // No imprime nada porque el índice de inicio es mayor que el índice de fin

// Alternativa a slice: .substring
console.log(producto.substring(0, 10)); // Corta desde el índice 0 al 10 y imprime: Monitor 20
console.log(producto.substring(2, 1)); // Intercambia los índices y corta desde el índice 1 al 2, imprime: o

const usuario = 'Juan';
console.log(usuario.substring(0, 1)); // Corta desde el índice 0 al 1 y imprime: J
console.log(usuario.charAt(0)); // Imprime el carácter en el índice 0, imprime: J