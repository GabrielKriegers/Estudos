var total = 0
while (true){
    var pedido = parseInt(prompt("Informe o que deseja comprar hoje: "));
    if (pedido != 0){
        var qnt = parseFloat(prompt("Informe a quantidade a ser comprada: "))
        switch (pedido) {
            case 1:
                console.log(qnt, "Suco \nValor: R$", (qnt * 6));
                total += qnt * 6;
                break;
            case 2:
                console.log(qnt, "Pão de queijo \nValor: R$", (qnt * 3));
                total += qnt * 3;
                break;
            case 3:
                console.log(qnt, "Pastel \nValor: R$", (qnt * 7));
                total += qnt * 7;
                break;        
            case 4:
                console.log(qnt, "Salada de frutas \nValor: R$", (qnt * 9));
                total += qnt * 9;
                break;
            case 5:
                console.log(qnt, "Café com leite \nValor: R$", (qnt * 3.50));
                total += qnt * 3.5;
                break;        
            case 6:
                console.log(qnt, "Cappuccino \nValor: R$", (qnt * 4.50));
                total += qnt * 4.5;
                break;        
            case 7:
                console.log(qnt, "Iogurte \nValor: R$", (qnt * 6.50));
                total += qnt * 6.5;
                break;        
            case 8:
                console.log(qnt, "Água \nValor: R$", (qnt * 2.50));
                total += qnt * 2.5;
                break;
            default:
                break;
            }
            
    }else{
        break;
    }
}
total = total.toFixed(2)
alert("O valor da compra é "+total+ " reais.");
