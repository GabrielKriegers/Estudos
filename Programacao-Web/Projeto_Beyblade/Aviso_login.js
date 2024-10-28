const botao = document.getElementById('botao');
const inputs = document.querySelectorAll('#cadastro_input');
const aviso = document.getElementById('aviso_cadastro');
var c = 0;
function avisar(){
    inputs.forEach(input => {
        if (input.value === ''){
            c += 1  
        }
        if (c != 0){
            aviso.style.display = 'block';    
        }else{
            aviso.style.display = 'none';
        }
    });
    c = 0
}


botao.addEventListener('click', avisar)