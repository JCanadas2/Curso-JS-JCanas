const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true,
    informacion : {
        medidas : {
            peso: '1kg',
            medida: '1m'
        },
        fabricacion: { 
            pais: 'China',
            empresa: 'LG'
        }
    }    
}

const {nombre, informacion, informacion:{fabricacion: {pais} } } = producto;
console.log(nombre);
console.log(informacion);
console.log(pais);