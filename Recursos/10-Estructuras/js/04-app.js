const dinero = 100;
const totalAPagar = 500;
const tarjeta = false; 
const cheque = false;

if (dinero >= totalAPagar) {
    console.log('Si podemos pagar');
} else if(cheque) {
    console.log('Si podemos pagar');
} else if (tarjeta) {
    console.log('Si podemos pagar')
} else {
    console.log('Fondos insuficientes')
}