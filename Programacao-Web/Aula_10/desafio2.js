var palavra = prompt("Digite a palavra a ser invertida: ");

var letras = palavra.split("");
// letras = letras.reverse();
// letras = letras.join();
for (var i = letras.length - 1; i >= 0; i--) {
  document.write(letras[i]);
}
