function calculateFactorial(num) {
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
      factorial *= i;
    }
    return factorial;
  }
  
  function main() {
    let input = prompt("Digite vários números separados por ponto e vírgula (;):");
    let numbers = input.split(";");
  
    // Converter os números de string para números
    for (let i = 0; i < numbers.length; i++) {
      numbers[i] = parseFloat(numbers[i]);
    }
  
    // Calcular a soma dos números
    let sum = numbers.reduce((acc, num) => acc + num, 0);
  
    // Calcular o fatorial da soma
    let factorial = calculateFactorial(sum);
  
    console.log(`Números digitados: ${numbers.join(", ")}`);
    console.log(`Soma dos números: ${sum}`);
    console.log(`Fatorial da soma: ${factorial}`);
  }
  
  main();
  