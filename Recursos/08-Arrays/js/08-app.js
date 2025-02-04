const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true
}

const {disponible} = producto;

console.log(disponible);

const numeros = [10, 20, 30, 40, 50];
const [primero, ...tercero ] = numeros;

console.log(tercero);