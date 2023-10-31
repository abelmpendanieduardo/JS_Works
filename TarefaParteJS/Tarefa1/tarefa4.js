function somarNumeros() {
    const num1 = parseFloat(prompt("Digite o primeiro número:"));
    const num2 = parseFloat(prompt("Digite o segundo número:"));
  
    if (!isNaN(num1) && !isNaN(num2)) {
      const resultado = num1 + num2;
      alert(`A soma dos números é: ${resultado}`);
    } else {
      alert("Por favor, digite números válidos.");
    }
  }
  
  // Chame a função para realizar a soma
  somarNumeros();
  