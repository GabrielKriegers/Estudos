document.addEventListener('DOMContentLoaded', function() {
const lsugestoes = [
    {nome:'Forcedragon',preco: 'R$723,99', imagem: 'imagens/beyblade9.jpg'},
    {nome:'Excecion' , preco:'R$167,99' , imagem: 'imagens/beyblade8.jpg'},
    {nome:'Terteen' , preco:'R$872,99' , imagem: 'imagens/beyblade8.jpeg'},
    {nome:'Lendario' , preco:'R$532,99' , imagem: 'imagens/beyblade7.jpg'},
    {nome: 'Proton', preco:'R$542,99' , imagem: 'imagens/beyblade6.jpg'},
    {nome:'Haase' , preco:'R$823,99' , imagem: 'imagens/beyblade5.jpg'},
    {nome:'Ioreen' , preco:'R$282,99' , imagem: 'imagens/beyblade4.jpg'},
    {nome:'Loooer' , preco:'R$534,99' , imagem: 'imagens/beyblade3.jpg'},
    {nome:'Jaaase' , preco:'R$131,99' , imagem: 'imagens/beyblade2.jpg'},
    {nome:'Mandragon' , preco:'R$101,99' , imagem: 'imagens/beyblade8.jpg'},
    {nome:'Protonz' , preco:'R$201,99' , imagem: 'imagens/beyblade10.jpg'},
    {nome:'Scairen' , preco:'R$99,99' , imagem: 'imagens/D_NQ_NP_917747-MLU71083716045_082023-O.webp'},
    ];


const searchIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="var(--color-dark1)" class="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                            </svg>`
var searchbox = document.getElementById('searchbox');
var pesquisar = document.getElementById('pesquisa');
var sugestao = document.getElementById('sugestoes');
var lupa = document.getElementById('lupa');
var aviso = document.getElementById('aviso');
var c = 0;


function sugerir(){
    var query = this.value.toLowerCase();
    sugestao.innerHTML = '';
    
    if (query){
        
        const filtradas = lsugestoes
            .filter(item => item.nome.toLowerCase().includes(query))
            .map(item => item.nome);
        
        if (filtradas.length > 0){
            searchbox.style.borderRadius =  '10px 10px 0 0';
            sugestao.style.display = 'block';
            filtradas.forEach(item => {
                const itemsugerido = document.createElement("div");
                itemsugerido.classList.add('item-sugerido');                
                const svgElement = new DOMParser().parseFromString(searchIcon, "image/svg+xml").documentElement;
                itemsugerido.appendChild(svgElement);
                itemsugerido.appendChild(document.createTextNode(' ' + item));

                itemsugerido.addEventListener('click', () => {
                    pesquisar.value = item;
                    sugestao.innerHTML = '';
                    sugestao.style.display = 'none';
                    filtrar();
                });
                sugestao.appendChild(itemsugerido);
            });
            sugestao.style.display = 'block';
        }else{
            searchbox.style.borderRadius =  '10px';
            sugestao.style.display = 'none';
        }
        
    }else{
        searchbox.style.borderRadius =  '10px';
        sugestao.style.display = 'none';
    }
}



function lupada(){
    const linha1 =  document.getElementById('linha_01');
    const linha2 =  document.getElementById('linha_02');
    linha1.innerHTML = '';
    linha2.innerHTML = '';
    var linha = linha1;
    c = 0
    if (filtradas.length > 0){
        filtradas.forEach(item => {
            if (c>=6){
                linha = linha2;
            }
            const itemHTML = `
            <div class="produto">
            <div class="foto">
            <img class="imagem1" src="${item.imagem}" alt="${item.nome}">
            </div>
            <ul>
            <li class="nome">${item.nome}</li>
            <li class="preco">Preço: ${item.preco}</li>
            </ul>
            <div class="parcela">
            <a class='juros'>5x sem juros</a>
            </div>
            </div>
            `;
            linha.innerHTML += itemHTML;

            c += 1
        });
    }else{
        aviso.style.display = 'flex';

    }
}

var filtradas = [];
function filtrar(){
    searchbox.style.borderRadius =  '10px';
    sugestao.style.display = 'none';
    aviso.style.display = 'none';
    const query = pesquisar.value.toLowerCase();
    filtradas = lsugestoes
    .filter(item => item.nome.toLowerCase().includes(query));
    
    lupada();
}



lupa.addEventListener('click', filtrar);
pesquisar.addEventListener('input', sugerir);
pesquisar.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        filtrar();
    }
});

});