var n1 = parseFloat(prompt("Informe a primeira nota: "));
var n2 = parseFloat(prompt("Informe a segunda nota: "))

var media = (n1 + n2 ) / 2;
var conceito = "";

if (media < 4) {
    conceito = "E";
}else if (media < 6) {
    conceito = "D";
}else if (media < 7.5) {
    conceito = "C";
}else if (media < 9) {
    conceito = "B";
}else {
    conceito = "A";
}

if (conceito ==  "D" || conceito == "E") {
    document.write(n1 +", " + n2 + ", a media é " + media + ", o conceito é "+ conceito + " e o aluno(a) está REPROVADO!");
}else {
    document.write(n1 +", " + n2 + ", a media é " + media + ", o conceito é "+ conceito + " e o aluno(a) está APROVADO!")
}
