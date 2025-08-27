"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//funcion void
function obtenerValor(name, age) {
    console.log("Bienvenido " + name + ", tu edad es: " + age);
}
//lamado de la funcion
obtenerValor('Usuario', 21);
//funcion con retorno y parametros tipados
function calcularValor(num1, num2) {
    return num1 + num2;
}
//lamado de la funcion
let resultado = calcularValor(10, 20);
console.log("El resultado de la suma es: " + resultado);
//funcion con parametros pero vacia
function mostrarMensaje(mensaje, veces) {
    for (let i = 0; i < veces; i++) {
        console.log(mensaje);
    }
}
mostrarMensaje('Hola Mundo', 3);
//funcion definida el tipo de dato con retorno
function datoEsperado() {
    return 42;
}
let dato = datoEsperado();
console.log("El dato esperado es: " + dato);
//funcion con objeto como parametro y parametros opcionales
function procesarUsuario(usuario) {
    console.log(`ID: ${usuario.id}, Nombre: ${usuario.nombre}, Activo: ${usuario.activo}`);
}
procesarUsuario({ nombre: 'Juan', activo: true });
//funcion con seteo de parametros por defecto
function saludar(nombre = 'Invitado') {
    console.log(`Hola, ${nombre}!`);
}
saludar(); // Usa el valor por defecto
saludar('Carlos'); // Usa el valor proporcionado
