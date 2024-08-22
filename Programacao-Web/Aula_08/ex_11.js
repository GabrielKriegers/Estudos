var n = parseInt(prompt("Digite um número para saber sua tabuada: "));
var i = 0;
console.log("Tabuada do: "+ n);

for (i; i<= 10; i++) {
    var resultado = n * i;
    console.log(n + " x "+ i + " = " + resultado);
}