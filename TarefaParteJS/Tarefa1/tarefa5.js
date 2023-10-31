// Vetor para números pares
var numerosPares = [];

// Vetor para números ímpares
var numerosImpares = [];

// Função para verificar se um número é par ou ímpar
function ehParOuImpar(numero) {
    if (numero % 2 === 0) {
        return "par";
    } else {
        return "ímpar";
    }
}

// Função para receber números e classificá-los
function receberNumeros() {
    while (true) {
        var numero = parseInt(prompt("Digite um número (ou um valor não numérico para sair):"));
        
        if (isNaN(numero)) {
            break;
        } else {
            if (ehParOuImpar(numero) === "par") {
                numerosPares.push(numero);
            } else {
                numerosImpares.push(numero);
            }
        }
    }
}

// Chama a função para receber números
receberNumeros();

// Exibe os números pares e ímpares
console.log("Números pares: " + numerosPares);
console.log("Números ímpares: " + numerosImpares);
