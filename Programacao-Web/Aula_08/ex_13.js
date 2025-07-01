var n = parseInt(prompt("Quantidade de notas: "));
var total = 0;
for(var i = 1; i<= n; i++) {
    var nota = parseInt(prompt("Nota: "));
    total += nota;
}
var media = total / n;

if (media < 6){
    console.log("Sua média é " + media + " você está reprovado");
}else {
    console.log("Sua média é " + media + " você está aprovado");
}