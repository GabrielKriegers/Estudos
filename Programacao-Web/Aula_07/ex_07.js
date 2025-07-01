var nome = prompt("Informe o nome do estudante: ");
var n1 = parseFloat(prompt("Informe a primeira nota: "));
var n2 = parseFloat(prompt("Informe a segunda nota: "));
var n3 = parseFloat(prompt("Informe a terceira nota: "));

var media = (n1 + n2 + n3) / 3

if (media < 7) {
    document.write("A média do(a) "+ nome + " foi "+ media +" pontos por isso ele(a) está reprovado(a).");
}else if (media == 10) {
    document.write("A média do(a) "+ nome + " foi "+ media +" pontos por isso ele(a) está aprovado com distinção.");
}else {
    document.write("A média do(a) "+ nome + " foi "+ media +" pontos por isso ele(a) está aprovado.")
}