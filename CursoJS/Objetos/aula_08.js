// Superclasse
function Conta(age, num, saldo){
    this.age = age;
    this.num = num;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor) {
    if (this.saldo < valor){
        console.log(`Saldo insuficiente! \nSaldo: ${this.saldo} \nSaque: ${valor}`);
        this.verSaldo();
        return;
    }
    
    this.saldo -= valor;
    this.verSaldo();
};

Conta.prototype.depositar = function(valor) {
    this.saldo += valor;
    this.verSaldo();
};

Conta.prototype.verSaldo = function() {
    console.log(`Age/c: ${this.age}/${this.num} Saldo R$ ${this.saldo.toFixed(2)}`);
};

function ContaCorrente(age, num, saldo, limite){
    Conta.call(this, age, num, saldo);
    this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function(valor){
    if ((this.saldo + this.limite) < valor){
        console.log(`Saldo insuficiente! \nSaldo: ${this.saldo} \nLimite: ${this.limite} \nSaque: ${valor}`);
        this.verSaldo();
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
}

function ContaPoupanca(age, num, saldo){
    Conta.call(this, age, num, saldo);
}

ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;
