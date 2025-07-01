class ValidadorDeCpf{
    constructor(cpfEntrada){
        this.cpf = cpfEntrada;
    }
    formatarCpf(){
        const numCpf = this.cpf.replace(/\D+/g, '');
        if (!this.validarFormato(numCpf)) return false;
        if (this.validarCpf(numCpf)) return true;
        return false;
    }

    validarFormato(cpf){
        if (cpf.length !== 11) return false;
        if (this.isSequencia(cpf)) return false;
        return true;
    }

    validarCpf(cpf){
        const cpfOriginal = cpf;
        let arrayCpf = Array.from(cpf).slice(0, -2);
        const digito1 = ValidadorDeCpf.criaDigito(arrayCpf);
        arrayCpf.push(digito1);
        const digito2 = ValidadorDeCpf.criaDigito(arrayCpf);
        const novoCpf = arrayCpf.join('') + digito2;
        return novoCpf === cpfOriginal;
    }

    isSequencia(cpf){
        return cpf === cpf[0].repeat(cpf.length);
    }

    static criaDigito(cpfIncompleto){
        const cpfArray = Array.from(cpfIncompleto);
        let multiplicador = cpfArray.length + 1
        const soma = cpfArray.reduce(function(ac, valor){
            ac += Number(valor) * multiplicador;
            multiplicador --;
            return ac;
        }, 0)
        
        const digito = 11 - (soma % 11); 
        return digito > 9 ? '0' : String(digito);
    }
}


const validador1 = new ValidadorDeCpf('801.570.549-50');

if(validador1.formatarCpf()){
    console.log('Cpf válido.');
}else{
    console.log('Cpf inválido.');
}
