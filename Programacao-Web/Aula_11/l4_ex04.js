var n1 = parseInt(prompt("Digite um número: "));

console.log(parOuImpar(n1))


function parOuImpar(n) {
  if ((n % 2) == 0){
    return "O número é par!";
  }else{
    return "O número é ímpar!";
  }
}