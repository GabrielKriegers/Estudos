var c = prompt("Quantas cidades deseja cadastrar? ");
cidades = []
for(var i = 0; c > i; i++){
  cidade = prompt("Digite o nome da cidade: ");
  cidades.push(cidade)
}
console.log(cidades[0]);
var tamanho = cidades.length - 1;
console.log(tamanho)
console.log(cidades[tamanho]);