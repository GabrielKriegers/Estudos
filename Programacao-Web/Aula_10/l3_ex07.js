var c = prompt("Quantas notas deseja digitar? ");
notas = []
for(var i = 0; c > i; i++){
  nota = parseFloat(prompt("Digite a nota: "));
  notas.push(nota);
}

console.log(notas)