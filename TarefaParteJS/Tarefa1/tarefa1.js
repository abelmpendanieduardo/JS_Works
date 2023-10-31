// Função para verificar se um número é primo
function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
}

let negativeNumbers = [];
let neutralNumbers = 0;
let primeNumbers = 0;

while (true) {
  let input = prompt("Digite um número:");

  // Converter a entrada para um número
  let number = parseFloat(input);

  // Verificar se é um número válido
  if (isNaN(number)) {
    alert("Por favor, digite um número válido.");
    continue;
  }

  if (number < 0) {
    // Verificar se já temos 3 números negativos iguais
    if (negativeNumbers.includes(number)) {
      alert("Você digitou 3 números negativos iguais. Encerrando.");
      break;
    }
    negativeNumbers.push(number);
  } else if (number === 0) {
    neutralNumbers++;
  } else if (isPrime(Math.abs(number))) {
    primeNumbers++;
  }
}

let sumNegativeNumbers = negativeNumbers.reduce((acc, val) => acc + val, 0);

const quintuploNeutros = 5 * neutralNumbers;

console.log(`Quantidade de números primos: ${primeNumbers}`);
console.log(`Quintuplo da quantidade de números neutros: ${quintuploNeutros}`);
console.log(`Soma dos números negativos: ${sumNegativeNumbers}`);
