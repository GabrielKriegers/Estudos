var n1 =  prompt("Digite a primeira idade:");
var n2 =  prompt("Digite a segunda idade:");

if (n1 > n2) {
    document.write("A maior idade é "+ n1 +".");
}else if (n1 < n2){
    document.write("A maior idade é " + n2 +".");
}else {
    document.write("As idades são iguais.")
}