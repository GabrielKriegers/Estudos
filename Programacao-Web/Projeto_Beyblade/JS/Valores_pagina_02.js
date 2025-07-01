const btn_mais = document.getElementById('mais_carrinho');
const btn_menos = document.getElementById('menos_carrinho');
const qnt = document.getElementById('quantidade_de_itens_carrinho');
const precoA = document.getElementById('preco_antigo');
const precoA_valor = parseFloat(precoA.textContent);
const cep = document.getElementById('input_cep');
const preco_frete = document.getElementById('preco_frete');
const precoF = parseFloat(preco_frete.textContent);
const preco1 = document.getElementById('preco_unitario_carrinho1');
const precoU1 = parseFloat(preco1.textContent);
const preco_total = document.getElementById('preco_total');
const preco_produtos = document.getElementById('preco_produtos');
const cupom = document.getElementById('input_cupom');
const preco_descontado = document.getElementById('preco_descontado')

let preco1_Variado = '';
let precoU1_Variado = '';
let preco2_Variado = '';
let precoU2_Variado = '';
let preco3_Variado = '';
let precoU3_Variado = '';

function pegar_valores(){
    preco1_Variado = document.getElementById('preco_unitario_carrinho1');
    precoU1_Variado = parseFloat(preco1_Variado.textContent);
    preco2_Variado = document.getElementById('preco_unitario_carrinho2');
    precoU2_Variado = parseFloat(preco2_Variado.textContent);
    preco3_Variado = document.getElementById('preco_unitario_carrinho3');
    precoU3_Variado = parseFloat(preco3_Variado.textContent);
    aplicar_cupom();
}