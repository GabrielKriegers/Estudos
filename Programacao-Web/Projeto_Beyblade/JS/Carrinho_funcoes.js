function atualizar_preco_antigo(){
    let quantidade = parseInt(qnt.value);
    let total = quantidade * precoA_valor;
    precoA.textContent = total.toFixed(2); 
}

function formatarCEP(cep_input) {
    let valor = cep_input.value.replace(/\D/g, "");
    if (valor.length > 5) {
        valor = valor.slice(0, 5) + '-' + valor.slice(5, 8);
    }
    cep_input.value = valor;
}

function calcular_frete(){
    if (cep.value == '88495-000'){
        preco_frete.textContent = '5,00';
    }else if(cep.value == '88490-000'){
        preco_frete.textContent = '15,00';
    }else if(cep.value == '88780-000' || cep.value == '88900-071'){
        preco_frete.textContent = '10,00';
    }else{
        preco_frete.textContent = '0,00'
    }
}

function aplicar_cupom(){
    let total = precoU1_Variado + precoU2_Variado + precoU3_Variado + parseFloat(preco_frete.textContent);
    let produtos = precoU1_Variado + precoU2_Variado + precoU3_Variado;

    let cupom = input_cupom.value.toUpperCase();
    if (cupom == 'BETAO'){
        preco_descontado.textContent = preco_frete.textContent;
        total = total - parseFloat(preco_frete.textContent);
    }else if(cupom == 'LEO'){
        total = total * 0.9;
        preco_descontado.textContent = (total * 0.1).toFixed(2);
        
    }else{
        preco_descontado.textContent = '0.00';
    }

    preco_produtos.textContent = produtos.toFixed(2);
    preco_total.textContent = total.toFixed(2);
}

cep.addEventListener("input", function(){
    formatarCEP(cep);
})
cep.addEventListener("input", calcular_frete);
cep.addEventListener("input", pegar_valores);
input_cupom.addEventListener("input", aplicar_cupom);
