function random(min=0, max=3){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject) => {        
        setTimeout(()=> {
            if (typeof msg !== 'string'){
                reject('CAIU NO CATCH.');
                return; 
        }    
            resolve(msg.toUpperCase() + ' - Passei na promise');
        }, tempo);
    });
};

// esperaAi('Fase 1', random())
//     .then(valor => {
//         console.log(valor);
//         return esperaAi('Fase 2', random());
//     })
//     .then(valor => {
//         console.log(valor);
//         return esperaAi('Fase 3', random());
//     })
//     .then(valor => {
//         console.log(valor)
//         return valor;
//     })
//     .then(valor => {
//         console.log('Terminamos na', valor);
//     })
//     .catch(e => console.log(e));

async function executa(){
    try {
        const fase1 = esperaAi('Fase 1', random());
        console.log(fase1);
    
        const fase2 = await esperaAi('Fase 2', random());
        console.log(fase2);
        
        const fase3 = await esperaAi('Fase 3', random());
        console.log(fase3);
        
        console.log('Terminamos na', fase3);
    }catch(e) {
        console.log(e);
   }
}
executa();



/*
pending -> pendente 
fulfilled -> resolvida
rejected -> rejeitada
*/