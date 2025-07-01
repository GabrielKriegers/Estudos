var deposito = parseFloat(prompt("Informe o valor que será depositado todo mês: "));
var total = 0
var totald = 0
for (var i = 1; i <= 24; i++) {
    total = total + (total * 0.005);
    totald = totald + deposito;
    var visor = total.toFixed(2);
    console.log("Mês: "+ i + " valor: " + visor);
    total += deposito;
}
var visor = total.toFixed(2);
console.log("Total acumulado foi: " + visor + " reais.");
