//Formas de importar módulos

//import {Usuario, generarUsuario } from './Modulos';
//import { PI as myPi} from './Modulos';
import * as Modulos from './Modulos';


console.log("El valor de PI es: " + Modulos.PI);

// ...existing code...
const usuario: Modulos.Usuario = {
    nombre: "Juan",
    edad: 30,
    direccion: "Calle Falsa 123"
}; 

console.log("Usuario:", usuario);
