export function setupAny(element: HTMLParagraphElement) {
    // Variable de tipo 'any'
    let variableAny: any = "Hola, soy una cadena";
    element.innerHTML += `<p>Variable any (cadena): ${variableAny}</p>`;    

    variableAny = 42; // Ahora es un número
    element.innerHTML += `<p>Variable any (número): ${variableAny}</p>`;

    variableAny = true; // Ahora es un booleano
    element.innerHTML += `<p>Variable any (booleano): ${variableAny}</p>`;
}