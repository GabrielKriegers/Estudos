var chute = 0;
n = Math.floor(Math.random()*100);
console.log(n)
var c = 0
while (n != chute){
    chute = parseInt(prompt("Digite um número: "));
    c ++
    if (chute > n){
        console.log("O número é menor");
    }else if (chute < n){
        console.log("O número é maior");
    }
}
alert("Parabéns o número era "+ n +" você acertou em "+ c + " tentativas.")