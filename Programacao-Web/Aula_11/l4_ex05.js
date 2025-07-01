var frase = prompt("Digite uma frase: ");

giria(frase);

function giria(frase) {
  frase = frase.toLowerCase();
  frase = frase.replace('muito', 'mto');
  frase = frase.replace('feliz', 'felizona');
  frase = frase.replace('estou', 'tô')
  frase = frase.charAt(0).toUpperCase() + frase.substring(1);
  console.log(frase);
}