export function setupTryCatch(element: HTMLParagraphElement): void {
    let salida: string = '<h2>Try...Catch</h2>';
    try {
        // Código que puede generar un error
        localStorage.setItem('nombre', 'Juan');
        const valor: string = localStorage.getItem('nombre') || '';
        salida += `<p>Valor guardado en localStorage: ${valor}</p>`;
    } catch (error) {
        // Manejo del error
        salida += `<p>Error al acceder a localStorage: ${(error as Error).message}</p>`;
    }
    element.innerHTML = salida;
}