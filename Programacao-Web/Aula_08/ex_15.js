var soma = 0;
var c = 0;
var numero = 1;

while(numero != 0){
    numero = parseFloat( prompt("Digite o número e quando quiser parar digite 0: "));
    soma += numero; 
    c += 1;
    console.log(numero, soma);
}

console.log("Foram digitados ", (c - 1) , " números, sua soma é igual a " ,soma);