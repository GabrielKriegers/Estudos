const botao = document.getElementById('botao');
const inputs = document.querySelectorAll('#cadastro_input');
const avisoHTML = document.getElementById('aviso_texto');
const aviso = document.getElementById('aviso_cadastro')
const aviso_texto = 'Faltou digitar'

function avisos(){
    const input_vazio = []
    inputs.forEach(input => {
        if (input.value === '')
            input_vazio.push(input.getAttribute('data-name'));
    });

    let aviso_texto_base = aviso_texto

    if (input_vazio.length != 0){
        input_vazio.forEach((vazio, index) => {
            if (index === input_vazio.length - 1){
                aviso_texto_base += ' ' + vazio + '.';
            }else{
                aviso_texto_base += ' ' + vazio + ',';
            }
        });
        aviso.textContent = aviso_texto_base;
        aviso.style.display = 'block';
    }else{
        aviso.style.display = 'none';
    }

}

botao.addEventListener('click', avisos)