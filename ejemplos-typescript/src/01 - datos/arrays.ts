export function setupArrays(element: HTMLParagraphElement): void {
    // Array de números
    let numeros: number[] = [1, 2, 3, 4, 5];

    // Array de strings
    let frutas: string[] = ["Manzana", "Banana", "Cereza"];
    // Array de booleanos
    let booleanos: boolean[] = [true, false, true];

    // Array de cualquier tipo (no recomendado)
    let mixto: any[] = [1, "Hola", true, null];

    element.innerHTML += `<p>Números: ${numeros.join(", ")}</p>`;
    element.innerHTML += `<p>Números Logintud: ${numeros.length}</p>`;
    element.innerHTML += `<p>Frutas: ${frutas.join(", ")}</p>`;
    element.innerHTML += `<p>Frutas [0]: ${frutas[0]}</p>`;
    element.innerHTML += `<p>Booleanos: ${booleanos.join(", ")}</p>`;
    element.innerHTML += `<p>Mixto: ${mixto.join(", ")}</p>`;

    // Añadir un elemento al final del array
    numeros.push(6);
    element.innerHTML += `<p>Números después de push(6): ${numeros.join(", ")}</p>`;
}