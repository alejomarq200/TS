
//Variables y constantes
const PI = 3.14;
interface Usuario {

    nombre: string;
    edad: number;
    direccion: string;
}   

function generarUsuario(nombre: string, edad: number, direccion: string): Usuario {

    return {
        nombre,
        edad,
        direccion
    }
}

export { PI, Usuario, generarUsuario }; 