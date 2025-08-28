"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PI = void 0;
exports.generarUsuario = generarUsuario;
//Variables y constantes
const PI = 3.14;
exports.PI = PI;
function generarUsuario(nombre, edad, direccion) {
    return {
        nombre,
        edad,
        direccion
    };
}
