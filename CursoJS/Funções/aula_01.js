// Declaração de função (Function hoisting)
falaOi();
function falaOi(){
    console.log('Oi');
}

// First-class objects (Objetos de primeira classe)
// Function expression

const souUmDado = function (){
    console.log("Sou um dado.");
}

function executaFuncao(funcao){
    funcao();
}

executaFuncao(souUmDado);

// Arrow function 
const funcaoArrow = () => {
    console.log('Executando a Arrow function.');
};

funcaoArrow();

// Dentro de um objeto 

const obj = {
    falar(){
        console.log('Falando...')
    }
}

obj.falar()