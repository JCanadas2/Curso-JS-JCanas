const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
    mostrarInfo: function() {
        console.log('El Producto: s{this.nombre} tiene un precio de ${this.precio} ');
    }
}

const producto2 = {
    nombre: "Tablet",
    precio: 3000,
    disponible: true,
    mostrarinfo: function() {
        console.log('El Producto: ${thisnombre} tiene un precio de: ${thisprecio} ') 
    }
}

producto.mostrarInfo();
producto2.mostrarInfo();