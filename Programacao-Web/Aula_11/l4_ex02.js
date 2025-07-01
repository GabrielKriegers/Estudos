var nome =  prompt("Seu nome: ");
var idade =  parseInt(prompt("Sua idade: "));
var tempo =  parseInt(prompt("Informe o tempo: "));

calcularTempoFuturo(nome, idade, tempo);

function calcularTempoFuturo(nome, idade, tempo) {
  console.log(nome, "terá ", idade + tempo, "anos daqui a", tempo, "anos.")
}