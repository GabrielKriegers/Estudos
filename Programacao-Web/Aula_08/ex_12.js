var n = parseInt(prompt("Digite um número para saber sua tabuada: "));
var inicio = parseInt(prompt("Digite o número em que sua tabuada começa: "));
var fim = parseInt(prompt("Digite o número em que sua tabuada termina: "));
var i = inicio;
console.log("Tabuada do: "+ n);

for (i; i<= fim; i++) {
    var resultado = n * i;
    console.log(n + " x "+ i + " = " + resultado);
}