const mais = document.getElementById('mais');
const menos = document.getElementById('menos');
const qnt = document.getElementById('quantidade_de_itens');
const preco = document.getElementById('preco_unitario');
const precoU = parseFloat(preco.textContent)

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
    let total = quantidade * precoU;
    preco.textContent = total.toFixed(2);
}

mais.addEventListener('click', somar);
menos.addEventListener('click', diminuir);
qnt.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        atualizar_preco();
    }
});