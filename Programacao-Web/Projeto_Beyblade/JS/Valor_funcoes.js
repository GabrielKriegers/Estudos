function somar(){
    let quantidade = parseInt(qnt.value);
    qnt.value = quantidade + 1;
    atualizar_preco();
}

function diminuir(){
    let quantidade = parseInt(qnt.value);
    if (parseInt(qnt.value) > 1){
        qnt.value = quantidade - 1;
        atualizar_preco();
    }
}

function atualizar_preco(){
    let quantidade = parseInt(qnt.value);
    let total = quantidade * precoU1;
    preco1.textContent = total.toFixed(2);
    atualizar_preco_antigo();
    pegar_valores();
}

btn_mais.addEventListener('click', somar);


btn_menos.addEventListener('click', diminuir);
qnt.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        atualizar_preco();
    }
});