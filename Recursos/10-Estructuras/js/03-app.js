// Operador mayor menor que
dinero = prompt("¿Cuánto dinero tienes?");
totalAPagar = prompt("Cuanto debes por las apuestas?")

if (dinero === totalAPagar) {
    alert("Felizidades, has pagado tu deuda de juego, ahora deberias pedirle dinero a tus amigos y familiares para apostarlo, estadisticamente es mas probable que estas vez ganes algo");
} else if (dinero > totalAPagar) {
    alert("Te sobra dinero, apuestalo");
} else {
    alert("Fondos insuficientes");
}