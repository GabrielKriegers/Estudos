function relogio(){
    const relogio = document.querySelector('.relogio');
    const iniciar = document.querySelector('.iniciar');
    const pausar = document.querySelector('.pausar');
    const zerar = document.querySelector('.zerar');
    let seconds = 0;
    let timer;
    let executando = false;


    function getTimeFromSeconds(seconds){
        const data = new Date(seconds * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false, 
            timeZone: 'UTC'
        });
    }


    function iniciarRelogio(){
        timer = setInterval(function(){
            executando = true
            seconds++;
            relogio.innerHTML = getTimeFromSeconds(seconds);
        }, 1000)
    }

    document.addEventListener('click', function(e){
        const el = e.target;

        if (el.classList.contains('iniciar')){
            relogio.classList.remove('pausado');
                if (executando == false){
                    iniciarRelogio(); 
                }
        }

        if (el.classList.contains('pausar')){
            clearInterval(timer);
                relogio.classList.add('pausado');
                executando = false;
        }

        if (el.classList.contains('zerar')){
            clearInterval(timer);
                relogio.innerHTML = '00:00:00';
                relogio.classList.remove('pausado');
                seconds = 0;
                executando = false;
        }
    })
}
relogio();