function checkSpecialWords(word) {
    const textarea = document.getElementById('enter');

    // Guarda la posición actual del cursor
    const inicio = textarea.selectionStart;
    const fin = textarea.selectionEnd;

    console.log("Start" + inicio + "\nEnd: " + fin);

    switch (word) {
        case "Inicio":
            textarea.value += ("\nFin");
            break;
        default:
            break;
    }
    textarea.setSelectionRange(inicio, fin);
}

function checkLastWord(input) {
    // Obtén el valor actual del campo de entrada
    var lastWord;
    const text = input.value;

    // Divide el texto en palabras utilizando un espacio en blanco como separador
    const words = text.split(' ');

    // Obtiene la última palabra completa escrita
    lastWord = words[words.length - 1];
    if (lastWord == " ") {
        lastWord = words[words.length - 2];
    }

    checkSpecialWords(lastWord);

    // Muestra la última palabra en un elemento HTML
    document.getElementById('lastWord').textContent = `Última palabra: ${lastWord}`;
}

function agregarSaltoDeLinea() {
    const textarea = document.getElementById('miTextarea');

    // Guarda la posición actual del cursor
    const inicio = textarea.selectionStart;
    const fin = textarea.selectionEnd;

    // Obtiene el contenido actual del textarea
    const contenido = textarea.value;

    // Agrega un salto de línea al final del contenido
    const nuevoContenido = contenido + '\n';

    // Actualiza el contenido del textarea
    textarea.value = nuevoContenido;

    // Restaura la posición del cursor al final
    textarea.setSelectionRange(inicio, fin);
}