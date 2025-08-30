export function setupCondicionales(element: HTMLParagraphElement): void {
    // declarar una variable de tipo number
    const edad: number = 20;
    // declarar una variable de tipo boolean
    const esAdulto: number = 18;

    //Operador ternario
    let mensaje: string = (edad >= esAdulto) ? 'Es adulto' : 'No es adulto';
    element.innerHTML = `<p>${mensaje}</p>`;

    // Estructura condicional if
    if (edad <= esAdulto) {
        element.innerHTML += `<p>No es adulto</p>`;
    }


    // Estructura condicional if...else
    if (!edad && edad != 0) {
        mensaje = `<p>La edad no puede ser igual a 0</p>`;
        element.innerHTML = `<p>${mensaje}</p>`;
    } else if (edad <= esAdulto) {
        mensaje = `<p>No es adulto</p>`;
        element.innerHTML = `<p>${mensaje}</p>`;
    } else {
        mensaje = `<p>Es adulto</p>`;
        element.innerHTML = `<p>${mensaje}</p>`;
    }

    // Estructura condicional switch
    const dia: number = 3;
    let diaSemana: string;
    switch (dia) {
        case 1:
            diaSemana = 'Lunes';
            break;
        case 2:
            diaSemana = 'Martes';
            break;
        case 3:
            diaSemana = 'Miércoles';
            break
        case 4:
            diaSemana = 'Jueves';
            break;
        case 5:
            diaSemana = 'Viernes';
            break;
        case 6:
            diaSemana = 'Sábado';
            break;
        case 7:
            diaSemana = 'Domingo';
            break;
        default:
            diaSemana = 'Día no válido';
            break;
    }

    // Mostrar el día de la semana
    element.innerHTML += `<p>El día de la semana es: ${diaSemana}</p>`;
}
