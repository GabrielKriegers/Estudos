var frase = prompt("Digite uma frase: ");
frase = frase.split("");
var vogais = [];
var cons = [];
frase.forEach(function(letra, indice) {
    letra = letra.toUpperCase();
    if (letra == "A" || letra == "E" || letra == "I" || letra == "O" || letra == "U"){
      vogais.push(letra);

    }else{
      cons.push(letra)
    } 
});
console.log(vogais);
console.log(cons);