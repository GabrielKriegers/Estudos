// Funções recursivas se chamam dentro da própria função
// Param em um limite pré estabelecido
function recursiva(max){
    console.log(max);
    if(max >= 10) return
    max++;
    recursiva(max);
}

recursiva(-10)