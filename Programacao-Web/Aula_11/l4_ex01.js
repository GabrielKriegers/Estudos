var n1 = parseFloat(prompt("Nota: "));
var n2 = parseFloat(prompt("Nota: "));
var n3 = parseFloat(prompt("Nota: "));

console.log("A média das notas é", calculaMedia(n1, n2, n3))


function calculaMedia(v1, v2, v3) {
  media = (v1 + v2 + v3) / 3;
  return media;
}