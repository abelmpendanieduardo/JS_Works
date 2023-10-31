// Função para verificar se um número é um palíndromo
function ePalindromo(numero) {
    // Converter o número para uma string
    var numeroStr = numero.toString();

    // Inverter a string
    var numeroInvertido = numeroStr.split('').reverse().join('');

    // Comparar o número original com o número invertido
    return numeroStr === numeroInvertido;
}

// Solicitar um número ao usuário via prompt
var numero = prompt("Digite um número:");

// Converter o valor digitado para um número
numero = parseInt(numero);

// Verificar se o número é um palíndromo
if (ePalindromo(numero)) {
    console.log(numero + " é um número palíndromo.");
} else {
    console.log(numero + " não é um número palíndromo.");
}
