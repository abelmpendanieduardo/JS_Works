// Função para remover vogais de um texto
function removerVogais() {
    var texto = prompt("Digite um texto:");
    var textoSemVogais = texto.replace(/[aeiouAEIOU]/g, "");

    console.log("Texto sem vogais:");
    console.log(textoSemVogais);
}

// Chama a função para remover as vogais do texto
removerVogais();
