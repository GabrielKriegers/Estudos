(function(){
const btnValidar = document.querySelector('.btn-validar');
const inputCpf = document.querySelector('.input-cpf');

inputCpf.addEventListener('keypress', ()=>{
    let inputLength = inputCpf.value.length;

    if(inputLength === 3 || inputLength === 7){
        inputCpf.value += '.';
    }else if(inputLength === 11){
        inputCpf.value += '-';
    }
})

document.addEventListener('keypress', event =>{
    if (event.key === 'Enter'){
        validacaoInicial();
    }
})
btnValidar.addEventListener('click', function(){
    if(!inputCpf.value) return;
    validacaoInicial();
})

function validacaoInicial(){
    var cpf = document.querySelector('.input-cpf');
    cpf = cpf.value.replace(/\D+/g, '');
    validarFormato(cpf, validarFormatoCallback);
}

function validarFormato(cpf, callback){
    if (cpf.length !== 11) return alert('Formato de CPF inválido');
    if (callback) callback(cpf);
}

function validarFormatoCallback(cpf){
    validarCpf(cpf);
}

function validarCpf(cpf){
    var numeros = [...cpf];
    numeros.splice(9, 2);
    numeros.forEach(num => {
        num = Number(num);
    })
    do{
        var multiplicador = numeros.length + 1;

        const somaDos9 = numeros.reduce((acumulador, valor) => {
            valor *= multiplicador;
            acumulador += valor;
            multiplicador -= 1;
            return acumulador;
        }, 0);
        let penultimo = 11 - (somaDos9 % 11);
        if (penultimo > 9) penultimo = 0;
        numeros.push(penultimo);

    }while (numeros.length < 11); 

    numeros = numeros.join('');
    console.log(numeros);
    if (numeros === cpf){
        console.log('CPF validado!');
    }else console.log('CPF inválido!');
}
})();