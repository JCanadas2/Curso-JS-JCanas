let resultado;

// Pi
const Pi = Math.PI;
console.log('Pi:', Pi); // Imprime: Pi: 3.141592653589793

// Redondear
resultado = Math.round(Pi);
console.log('Redondeo de Pi:', resultado); // Imprime: Redondeo de Pi: 3

resultado = Math.round(2.2);
console.log('Redondeo de 2.2:', resultado); // Imprime: Redondeo de 2.2: 2

resultado = Math.round(2.5);
console.log('Redondeo de 2.5:', resultado); // Imprime: Redondeo de 2.5: 3

resultado = Math.round(2.6);
console.log('Redondeo de 2.6:', resultado); // Imprime: Redondeo de 2.6: 3

resultado = Math.round(2.4);
console.log('Redondeo de 2.4:', resultado); // Imprime: Redondeo de 2.4: 2

// Redondear hacia abajo
resultado = Math.ceil(2.1);
console.log('Redondeo hacia abajo de 2.1:', resultado); // Imprime: Redondeo hacia abajo de 2.1: 3

// Redondear hacia arriba
resultado = Math.floor(2.9);
console.log('Redondeo hacia arriba de 2.9:', resultado); // Imprime: Redondeo hacia arriba de 2.9: 2

// Raíz cuadrada
resultado = Math.sqrt(144);
console.log('Raíz cuadrada de 144:', resultado); // Imprime: Raíz cuadrada de 144: 12

// Absoluto
resultado = Math.abs(-300);
console.log('Absoluto de -300:', resultado); // Imprime: Absoluto de -300: 12

// Potencia
resultado = Math.pow(2, 4);
console.log('Potencia de 2^4:', resultado); // Imprime: Potencia de 2^4: 16

// Minimo
resultado = Math.min(3, 5, 1, 12, -3);
console.log('Minimo:', resultado); // Imprime: Minimo: -3

// Maximo
resultado = Math.max(3, 5, 1, 12, -3);
console.log('Maximo:', resultado); // Imprime: Maximo: 12

//Aleatorio
resultado = Math.random() * 20;
console.log('Aleatorio:', resultado); // Imprime: Aleatorio: 0.123456789

// Aleatorio dentro de un rango
resultado = Math.floor( Math.random() * (37 - 40 +1) + 40  );
console.log('Aleatorio dentro de un rango:', resultado); // Imprime: Aleatorio dentro de un rango: 0
