export function setupBucles(element: HTMLParagraphElement): void {
    //Bucle for recorriendo array
    const array: number[] = [1, 2, 3, 4, 5];
    let mensajeArray: string = '<p>Bucle for recorriendo array:</p><ul>';
    for (let i = 0; i < array.length; i++) {
        mensajeArray += `<li>Índice ${i}: ${array[i]}</li>`;
    }
    
    
    // Bucle for recorriendo obtentiendo un valor
    let mensajeFor: string = '<p>Bucle for:</p><ul>';
    for (let i = 0; i < 5; i++) {
        mensajeFor += `<li>Índice ${i}</li>`;
    }
    mensajeFor += '</ul>';
    element.innerHTML = mensajeFor;
    
    // Bucle while
    let mensajeWhile: string = '<p>Bucle while:</p><ul>';
    let j: number = 0;
    while (j < 5) {
        mensajeWhile += `<li>Índice ${j}</li>`;
        j++;
    }   

    //Bucle do while
    let mensajeDoWhile: string = '<p>Bucle do while:</p><ul>';
    let k: number = 0;
    do {
        mensajeDoWhile += `<li>Índice ${k}</li>`;
        k++;
    } while (k < 5);

    //Bucle for...of
    let mensajeForOf: string = '<p>Bucle for...of:</p><ul>';
    for (const num of array) {
        mensajeForOf += `<li>Valor: ${num}</li>`;
    }

    //Bucle for...in
    let mensajeForIn: string = '<p>Bucle for...in:</p><ul>';
    const persona = {
        nombre: 'Juan',
        edad: 30,
        ciudad: 'Madrid'
    };
    for (const key in persona) {
        mensajeForIn += `<li>${key}: ${persona[key as keyof typeof persona]}</li>`;
    }

    //Recorrido de string con distintos tipos de bucles
    let mensajeString: string = '<p>Recorrido de string:</p><ul>';
    const texto: string = 'Hola';
    for (let i = 0; i < texto.length; i++) {
        mensajeString += `<li>Índice ${i}: ${texto[i]}</li>`;
    }
    let m: number = 0;
    while (m < texto.length) {
        mensajeString += `<li>Índice ${m}: ${texto[m]}</li>`;
        m++;
    }

    mensajeString += '</ul>';

    // Mostrar todos los mensajes
    element.innerHTML += mensajeArray + mensajeWhile + mensajeDoWhile + mensajeForOf + mensajeForIn + mensajeString;

}