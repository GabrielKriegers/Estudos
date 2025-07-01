class DispositivoEletronico{
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }

    ligar(){
        if(this.ligado) return;
        console.log(`${this.nome} já ligado`);
        this.ligado = true;
    }

    desligar(){
        if(!this.ligado) return; 
        console.log(`${this.nome} já desligado`);
        this.ligado = false;
    }
}


class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome);
        this.cor = cor;
        this.modelo;
    }
}

class Tablet extends DispositivoEletronico {
    constructor(nome, temWifi){
        super(nome);
        this.temWifi = temWifi;
    }
    
}

const s1 = new Smartphone('Iphone', 'Azul', '6S Plus');
console.log(s1);