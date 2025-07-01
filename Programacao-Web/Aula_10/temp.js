bomdia();
boatarde();
boanoite();
soma(23, 45)
console.log(calculaMedia(10, 9, 8));


function bomdia(){
  console.log("Olá...");
  console.log("Bom dia!");
}


function boatarde(){
  console.log("Olá...");
  console.log("Boa tarde!");
}

function boanoite(){
  console.log("Olá...");
  console.log("Boa noite!");
}

function soma (a, b){
  let resultado = a + b;
  console.log('Resultado:', resultado);
}

function soma (a, b){
  let resultado = a + b;
  console.log(`soma de ${a} com ${b} dá ${resultado}`);
}

function calculaMedia(n1, n2, n3) {
  let media = (n1 + n2 + n3) / 3;
  return media;
}
