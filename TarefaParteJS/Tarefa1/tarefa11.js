// Função para intercalar letras maiúsculas e minúsculas em uma frase
function intercalarMaiusculasEFraseMinusc(variavel) {
    var resultado = "";

    for (var i = 0; i < variavel.length; i++) {
        if (i % 2 === 0) {
            resultado += variavel[i].toLowerCase();
        } else {
            resultado += variavel[i].toUpperCase();
        }
    }

    return resultado;
}

// Solicitar uma frase ao usuário via prompt
var frase = prompt("Digite uma frase em minúsculas:");

// Chama a função para intercalar maiúsculas e minúsculas
var resultado = intercalarMaiusculasEFraseMinusc(frase);

console.log("Frase intercalada: " + resultado);
