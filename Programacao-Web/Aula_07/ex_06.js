var n1 = parseFloat(prompt("Digite a primeira nota: "));
var n2 = parseFloat(prompt("Digite a segunda nota: "));

var media = (n1 + n2)/2
if (media < 7) {
    document.write("Reprovado!");
}else if (media == 10){
    document.write("Aprovado com distinção!");
}else {
    document.write("Aprovado!")
}

