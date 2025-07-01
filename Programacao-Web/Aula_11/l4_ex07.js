var lista = [] 
for (let i = 0; i < 4; i++){
  lista[i] = lista.push(parseFloat(prompt("Digite o número: ")));
}

soma();

function soma() {
  let soma = 0
  for (let i = 0; i < 4; i++){
    soma += lista[i]
  }
  console.log("A soma dos valores é igual a", soma+".");
}