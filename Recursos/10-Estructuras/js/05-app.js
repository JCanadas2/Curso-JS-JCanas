const metodoPago = 'efectivo';

switch (metodoPago) {
    case 'efectivo':
        pagar();
        break;
    case 'cheque':
        console.log(`Pagaste con ${metodoPago}`);
        break;
    case 'tarjeta':
        console.log(`Pagaste con ${metodoPago}`);
        break;
    default:
        console.log('Aún no has selecionado un metodo de pago o método de pago no válido');
        break;
}

function pagar() {
    console.log('Pagando...');
}