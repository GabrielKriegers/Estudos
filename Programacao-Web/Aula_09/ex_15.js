var meses = parseInt(prompt("Informe a quantidade de meses: "));
var i = 0
var divida  = 1000.00
for (i; i < meses; i++) {
    divida =  divida + (divida * 0.153);
    var visor = divida.toFixed(2);
}
var visor = divida.toFixed(2);
console.log("Sua dívida é de", visor, "reais.")