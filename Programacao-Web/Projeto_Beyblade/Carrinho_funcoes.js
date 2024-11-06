function atualizar_preco_antigo(){
    let quantidade = parseInt(qnt.value);
    let total = quantidade * precoA_valor;
    precoA.textContent = total.toFixed(2); 
}