var n = parseInt(prompt("Quantas notas deseja informar?"))
var notas = [];
var soma;
for(var i = 0; n > i; i++){
  var nota = parseFloat(prompt("Digite a nota: "));
  notas.push(nota);
  soma += nota;
}
var menor = Math.min(...notas);
console.log(menor)
var maior = Math.max(...notas);
console.log(maior);
var media = soma / notas.length;
console.log(notas);
console.log(media)
console.log(soma)