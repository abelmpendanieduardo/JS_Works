// Função para inverter um texto
function inverterTexto() {
    var texto = prompt("Digite um texto:");
    var textoInvertido = "";

    for (var i = texto.length - 1; i >= 0; i--) {
        textoInvertido += texto[i];
    }

    console.log("Texto invertido:");
    console.log(textoInvertido);
}

// Chama a função para inverter o texto
inverterTexto();
