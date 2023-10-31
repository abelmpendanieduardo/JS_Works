// Função para gerar 5 palavras com base em uma palavra de entrada
function gerarPalavras(palavra) {
    var palavrasGeradas = [];
    
    // 1. Adicionar uma letra 's' no final
    palavrasGeradas.push(palavra + "s");

    // 2. Inverter a palavra
    var palavraInvertida = palavra.split('').reverse().join('');
    palavrasGeradas.push(palavraInvertida);

    // 3. Substituir vogais por números
    var palavraComNumeros = palavra.replace(/[aeiou]/g, function (match) {
        switch (match) {
            case 'a': return '4';
            case 'e': return '3';
            case 'i': return '1';
            case 'o': return '0';
            case 'u': return '7';
        }
    });
    palavrasGeradas.push(palavraComNumeros);

    // 4. Tornar a palavra em maiúsculas
    palavrasGeradas.push(palavra.toUpperCase());

    // 5. Adicionar um sufixo aleatório
    var sufixos = ["123", "XYZ", "Palavra", "Final"];
    var sufixoAleatorio = sufixos[Math.floor(Math.random() * sufixos.length)];
    palavrasGeradas.push(palavra + sufixoAleatorio);

    return palavrasGeradas;
}

var palavraEntrada = "exemplo"; // Substitua esta palavra pela palavra de entrada desejada
var palavrasGeradas = gerarPalavras(palavraEntrada);

console.log("Palavra de entrada: " + palavraEntrada);
console.log("Palavras geradas:");
console.log(palavrasGeradas);
