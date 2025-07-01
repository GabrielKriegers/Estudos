// Usando factory function
function criaCalculadora(){
    return {
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),


        inicia(){
            this.clickBotoes();
            this.pressionaEnter();
        },

        clearDisplay(){
            this.display.value = '';
        },

        delOne(){
            this.display.value = this.display.value.slice(0, -1);
        },
        
        btnParaDisplay(valor){
            this.display.value += valor;
        },

        realizaConta(){
            let conta = this.display.value;
            try{
                conta = eval(conta);

                if(!conta){
                    alert('Conta inválida.');
                    return;  
                }
                this.display.value = conta;
            }catch(e){
                alert('Conta inválida.');
                return;
            }
        }, 

        pressionaEnter(){
            this.display.addEventListener('keyup', event => {
                if (event.keyCode == 13){
                    this.realizaConta()
                }
            });
        }, 

        clickBotoes(){
            document.addEventListener('click', (event) => {
                const el = event.target;

                if (el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText);
                }

                if (el.classList.contains('btn-clear')){
                    this.clearDisplay();
                }

                if (el.classList.contains('btn-del')){
                    this.delOne()
                }

                if (el.classList.contains('btn-eq')){
                    this.realizaConta()
                }
            });

            
        },

    };
}

// const calculadora = criaCalculadora();
const calculadora = new Calculadora;
calculadora.inicia();


// Usando constructor function 
function Calculadora() {
    this.display = document.querySelector('.display');
    this.btnClear = document.querySelector('.btn-clear');

    this.inicia = () => {
        this.clickBotoes();
        this.pressionaEnter();    
    }

    this.clearDisplay = function(){
        this.display.value = '';
    };

    this.delOne = () => {
        this.display.value = this.display.value.slice(0, -1);   
    }

    this.btnParaDisplay = (valor) => {
        this.display.value += valor; 
    }

    this.realizaConta = () => {
        let conta = this.display.value;
        try{
            conta = eval(conta);

            if(!conta){
                alert('Conta inválida.');
                return;  
            }
            this.display.value = conta;
        }catch(e){
            alert('Conta inválida.');
            return;
        }
    }

    this.pressionaEnter = () => {
        this.display.addEventListener('keyup', event => {
            if (event.keyCode == 13){
                this.realizaConta()
            }
        });
    }

    this.clickBotoes = () => {
        document.addEventListener('click', (event) => {
            const el = event.target;

            if (el.classList.contains('btn-num')){
                this.btnParaDisplay(el.innerText);
            }

            if (el.classList.contains('btn-clear')){
                this.clearDisplay();
            }

            if (el.classList.contains('btn-del')){
                this.delOne()
            }

            if (el.classList.contains('btn-eq')){
                this.realizaConta()
            }
        });
    }
 
};