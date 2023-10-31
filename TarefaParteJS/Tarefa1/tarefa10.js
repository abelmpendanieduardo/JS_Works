// Função para contar vogais e sublinhar vogais em um nome
function contarEsublinharVogais(nome) {
    var vogais = "aeiouAEIOU";
    var nomeComSublinhado = "";

    var contadorVogais = 0;

    for (var i = 0; i < nome.length; i++) {
        var letra = nome[i];

        if (vogais.includes(letra)) {
            contadorVogais++;
            nomeComSublinhado += `<u>${letra}</u>`;
        } else {
            nomeComSublinhado += letra;
        }
    }

    return { contadorVogais, nomeComSublinhado };
}

// Solicitar um nome ao usuário via prompt
var nome = prompt("Digite um nome:");

// Chama a função para contar e sublinhar vogais
var resultado = contarEsublinharVogais(nome);

console.log("Nome: " + resultado.nomeComSublinhado);
console.log("Quantidade de vogais: " + resultado.contadorVogais);

