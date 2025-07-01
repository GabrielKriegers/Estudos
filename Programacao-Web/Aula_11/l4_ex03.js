horas = parseInt(prompt("Horas que ficou jogando: "));
min = parseInt(prompt("Minutos:"));

console.log("Você ficou", tempoTotal(horas, min), "minutos jogando videogame! ")

function tempoTotal(h, m){
  return h * 60 + m;
}