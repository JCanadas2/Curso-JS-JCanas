const producto = 'Monitor 20 Pulgadas';

// .replace para reemplazar partes de la cadena de texto
console.log(producto); // Imprime: Monitor 20 Pulgadas
console.log(producto.replace('Pulgadas','"')); // Reemplaza 'Pulgadas' con '"' y imprime: Monitor 20 "
console.log(producto.replace('Monitor', 'Monitor Curvo')); // Reemplaza 'Monitor' con 'Monitor Curvo' y imprime: Monitor Curvo 20 Pulgadas

// .slice para cortar partes de la cadena de texto
console.log(producto.slice(0, 10)); // Corta desde el índice 0 al 10 y imprime: Monitor 20
console.log(producto.slice(8)); // Corta desde el índice 8 hasta el final y imprime: 20 Pulgadas
console.log(producto.slice(2, 1)); // No imprime nada porque el índice de inicio es mayor que el índice de fin

// Alternativa a slice: .substring
console.log(producto.substring(0, 10)); // Corta desde el índice 0 al 10 y imprime: Monitor 20
console.log(producto.substring(2, 1)); // Intercambia los índices y corta desde el índice 1 al 2, imprime: o

const usuario = 'Juan';
console.log(usuario.substring(2, 4)); // Corta desde el índice 0 al 1 y imprime: J
console.log(usuario.charAt(0)); // Imprime el carácter en el índice 0, imprime: J

//repeat te va a permitir repetir una cadena de texto...
const texto = 'en Promoción '.repeat(1);

console.log(texto);
console.log(`${producto} ${texto} !!!`);

//Split, divir un string

const actividad = 'Estoy aprendiendo JavaScript Moderno';
console.log(actividad.split(' '));

const hobbies = 'Leer, caminar, escuchar música, escribir, aprender a programar';
console.log(hobbies.split(', '));

const tweet = '#Aprendiendo #JavaScript #JSModernoConJuan';
console.log(tweet.split('#'));