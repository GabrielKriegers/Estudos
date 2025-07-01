var linha = parseInt(prompt("Informe a quantidade de linhas: "));
var coluna = parseInt(prompt("Informe a quantidade de colunas: "));

var peca = '-';

for (let i = 0; i < linha; i++){
    if (i == 0 || (linha-1) == i){
        console.log('+'+peca.repeat(coluna-2)+'+');
    }else{
        console.log(peca.repeat(coluna));
    }
}