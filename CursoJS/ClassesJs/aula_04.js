function teste(){
    console.log('Testando.');
}

class ControleRemoto{
    constructor(tv, ){
        teste();
        this.tv = tv;
        this.volume = 0;
    }

    //Método de instância
    aumentarVolume(){
        this.volume++;
    }

    diminuirVolume(){
        this.volume--;
    }

    //Método estático
    static trocaPilha(x, y){
        console.log(this);
        return this.soma(x, y);
    }

    static soma(x, y){
        return x + y;
    }
}

const controle1 = new ControleRemoto('LG');

controle1.aumentarVolume();
console.log(ControleRemoto.trocaPilha(2, 5));
console.log(controle1);