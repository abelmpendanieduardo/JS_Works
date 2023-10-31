function rotateNumbers() {
    const numberInput = document.getElementById('numberInput');
    const resultDiv = document.getElementById('result');
    
    // Obtém o valor do campo de entrada
    const inputValue = numberInput.value;
    
    // Divide o valor em números separados por espaços
    const numbers = inputValue.split(' ');
    
    // Cria uma string para armazenar o resultado
    let result = '';
    
    // Itera sobre os números e aplica a rotação aos números 5
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] === '5') {
        // Adiciona uma classe CSS para aplicar a rotação
        result += `<span class="rotate-5">${numbers[i]}</span>`;
      } else {
        // Mantém os outros números sem rotação
        result += numbers[i];
      }
      
      // Adiciona um espaço entre os números
      if (i < numbers.length - 1) {
        result += ' ';
      }
    }
    
    // Exibe o resultado na página
    resultDiv.innerHTML = result;
  }
  