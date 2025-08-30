export function setupVariables(element: HTMLParagraphElement): void {
    let nombre: string = "Juan";
    let edad: number = 30;
    let esDesarrollador: boolean = true;
    let discapacidad: null = null; // Evitar usar 'any' si es posible


    // Variables 
    //Var se usar de manera similar a  JS
    var numeroVariable: number = 1;
    numeroVariable = numeroVariable + 1; // 2


    //let sea aplica a variables definidas

    let numeroLet: number = 1;
    numeroLet = 25; // 25


    //Constantes
    const PI: number = 3.1416;
    //PI = 4.5; // Error: no se puede reasignar una constante

    //Devolver todas las variables definidas impresas en el HTML
    element.innerHTML += `<p>Nombre: ${nombre}, Edad: ${edad}, Desarrollador: ${esDesarrollador}, Discapacidad: ${discapacidad}</p>`;
    element.innerHTML += `<p>Var: ${numeroVariable}, Let: ${numeroLet}</p>`;
    element.innerHTML += `<p>Constante PI: ${PI}</p>`;

}