function checkSpecialWords() {
    switch (word) {
        case "Inicio":
            document.getElementById('enter').innerHTML += ("\nFin");
            break;
        default:
            break;
    }
}

function checkLastWord(input) {
    // Obtén el valor actual del campo de entrada
    const text = input.value;

    // Divide el texto en palabras utilizando un espacio en blanco como separador
    const words = text.split(' ');

    // Obtiene la última palabra completa escrita
    const lastWord = words[words.length - 1];

    // Muestra la última palabra en un elemento HTML
    document.getElementById('lastWord').textContent = `Última palabra: ${lastWord}`;
}