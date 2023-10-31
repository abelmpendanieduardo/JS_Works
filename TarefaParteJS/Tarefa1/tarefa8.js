// Função para gerar 5 frases com base em uma frase de entrada
function gerarFrases(frase) {
    var frasesGeradas = [];
    
    // 1. Inverter a frase
    var fraseInvertida = frase.split('').reverse().join('');
    frasesGeradas.push(fraseInvertida);

    // 2. Substituir palavras por sinônimos
    var sinonimos = {
        "programa": "aplicação",
        "JavaScript": "JS",
        "gerar": "produzir",
        "frases": "sentenças",
        "entrada": "input"
    };
    var fraseComSinonimos = frase.replace(/\w+/g, function (match) {
        return sinonimos[match] || match;
    });
    frasesGeradas.push(fraseComSinonimos);

    // 3. Tornar a frase em maiúsculas
    frasesGeradas.push(frase.toUpperCase());

    // 4. Adicionar um sufixo aleatório
    var sufixos = ["!", "?", "...", " :)", " - fim"];
    var sufixoAleatorio = sufixos[Math.floor(Math.random() * sufixos.length)];
    frasesGeradas.push(frase + sufixoAleatorio);

    // 5. Misturar as palavras da frase
    var palavras = frase.split(' ');
    for (var i = 0; i < 5; i++) {
        shuffleArray(palavras);
        frasesGeradas.push(palavras.join(' '));
    }

    return frasesGeradas;
}

// Função para embaralhar um array
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

var fraseEntrada = "Este é um programa em JavaScript"; 
var frasesGeradas = gerarFrases(fraseEntrada);

console.log("Frase de entrada: " + fraseEntrada);
console.log("Frases geradas:");
console.log(frasesGeradas);
