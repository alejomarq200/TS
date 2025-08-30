export function setupEnums(element: HTMLParagraphElement): void {
    // Definición de un enum
    enum Color {
        Rojo = "Rojo",
        Verde = "Verde",
        Azul = "Azul"
    }

    // Uso del enum
    let colorFavorito: Color = Color.Verde;

    element.innerHTML += `<p>Color favorito: ${colorFavorito}</p>`;
}