var matriz = [["_", "_", "_"],
["_", "_", "_"],
["_", "_", "_"]];
vencedor = " ";
x = 0;
y = 0;
jogador = "O";

while (vencedor != 'O' || vencedor != 'X'){

    for (let lin = 0; lin < 4; lin++) {

        for (let col = 0; col < 4; col++){
            if (lin == 0){
                document.write(col, " ")
            }else if(col == 0 && lin <= 4){
                document.write(lin, " ");
            }else{
                document.write(matriz[lin-1][col-1] + "  ");
            }
        }
        document.write("<br />");
    }

    document.write("<br />");
    while (true){
        while (true){
        x = parseInt(prompt("Linha: "));
        if (x > 4 || x < 0){
            alert("Valor inválido!");
        }else{
            break;
        }
        }
        while (true){
            y = parseInt(prompt("Coluna: ")); 
            if (y > 4 || y < 0){
                alert("Valor inválido!");
            }else{
                break;
            }
        }
        // matriz[x-1][y-1] = jogador;
        // while (condition) {
        //     if (check == 1 ) {
        //         funçãoMongol()
        //     }
        // }
            

        // function funçãoMongol(check) {
        //     'algumacoisa'
        // }
        if (matriz[x-1][y-1] == "_"){
            matriz[x-1][y-1] = jogador;
            break;
        }else{
            alert("Já foi jogado nessa posição!")
        }
    }


    
    
    
    
    
    Verificar();
    if (jogador == "O"){
        jogador = "X";
    }else{
        jogador = "O";
    }
    if (x == 10){
        break;
    }
    

} 



function Verificar(){
    if (matriz[0][0] == matriz[0][1] && matriz[0][1] == matriz[0][2] || matriz[1][0] == matriz[1][1] && matriz[1][1] == matriz[1][2] || matriz[2][0] == matriz[2][1] && matriz[2][1] == matriz[2][2] ||matriz[0][0] == matriz[1][0] && matriz[1][0] == matriz[2][0] || matriz[0][1] == matriz[1][1] && matriz[1][1] == matriz[2][1] || matriz[0][2] == matriz[1][2] && matriz[1][2] == matriz[2][2] ||matriz[0][0] == matriz[1][1] && matriz[1][1] == matriz[2][2] || matriz[0][2] == matriz[1][1] && matriz[1][1] == matriz[3][0]){
        vencedor = jogador;
    }
}