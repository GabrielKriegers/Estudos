var compra = 0;
var n1 = 0;
total = 0;
do {
    n1 = parseFloat(prompt ("Digite o valor do produto: "));
    total += n1; 
    compra = prompt("Deseja continuar o cálculo dos produtos? Se sim digite 0, se não digite 1!");
}
while(compra == 0);

if (total >= 100){
    desconto = total * 0.10;
    total = total - desconto;
    total = total.toFixed(2);
}

document.write("O valor total R$"+total+".")