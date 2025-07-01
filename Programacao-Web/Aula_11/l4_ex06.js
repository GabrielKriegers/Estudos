var altura = parseFloat(prompt("Digite a altura do cilindro (m): "));
var raio = parseFloat(prompt("Digite o raio (m): "));

areaC(altura, raio);

function areaC(h, r) {
  let area = Math.PI * h * r;
  area = area.toFixed(2)
  console.log("A área desse cilindro é igual a", area, "metros cúbicos." ); 
}
