import { Animal } from "./Animal_Class_POO";
export function setupEjercicioClases(elemento:HTMLParagraphElement){

//Definición de variables

//Constructor


let animal = new Animal(50);
// animal.edad = 45;
// animal.ModificarEdad = 0;
animal.ModificarEdad = 10;

elemento.innerHTML = `Edad del animal: ${animal.ObtenerEdad}`;
}