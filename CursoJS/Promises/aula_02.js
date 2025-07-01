function random(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject) => {        
        setTimeout(()=> {
            if (typeof msg !== 'string'){
                reject('CAIU NO REJECT.');
                return; 
        }    
            resolve(msg.toUpperCase() + ' - Passei na promise');
        }, tempo);
    });
};



const promises = [
    esperaAi('Promise 1', random(0, 4)),
    esperaAi('Promise 2', random(0, 4)),
    esperaAi('Promise 3', random(0, 4)),
    esperaAi(1000, random(0, 4)),
];


// Promise.all

Promise.all(promises)
.then(function(valor){
    console.log(valor);
})
.catch(function(erro){
    console.log(erro);
});


// Promise.race

Promise.race(promises)
    .then(function(valor){
        console.log(valor);
    })
    .catch(function(erro){
        console.log(erro);
    });

// Promise.resolve

function baixaPagina(){
    const inCache = false;

    if(inCache){
        return Promise.resolve('Página em Cache.');
    }else{
        return esperaAi('Baixei a página', random(0, 4));
    }
}

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina);
    })
    .catch(e => {
        console.log(e);
    })


// Promise.reject

function baixaPagina(){
    const inCache = true;

    if(inCache){
        return Promise.reject('Página em Cache.');
    }else{
        return esperaAi('Baixei a página', random(0, 4));
    }
}

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina);
    })
    .catch(e => console.log('ERRO:', e))