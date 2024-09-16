var n = 1;
var soma = 0;
var c = 0
while (n != 0){
    n = parseInt(prompt("Informe o número inteiro: "));
    if (isNaN(n)) {
        alert("Valor inválido. Por favor digite um número: ");
    }else {
        soma += n;
        c ++;
    }
}
console.log("Foram digitados", (c-1) ,"números, sua soma é", soma);