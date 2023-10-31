// Função para receber um texto, classificar as palavras em ordem alfabética e imprimir o texto resultante
function ordenarPalavrasEmTexto() {
    var texto = prompt("Digite um texto:");
    var palavras = texto.split(/\s+/); // Divide o texto em palavras

    // Classifica as palavras em ordem alfabética
    palavras.sort();

    // Recria o texto a partir das palavras classificadas
    var textoOrdenado = palavras.join(" ");

    console.log("Texto com palavras em ordem alfabética:");
    console.log(textoOrdenado);
}

// Chama a função para ordenar as palavras no texto
ordenarPalavrasEmTexto();
