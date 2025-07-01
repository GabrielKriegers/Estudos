class ValidaFormulario{
    constructor(){
        this.formulario = document.querySelector('.formulario')
        this.eventos();
    }

    eventos(){
        this.formulario.addEventListener('submit', e =>{
            this.handleSubmit(e);
        })
    }

    handleSubmit(e){
        e.preventDefault();
        const isvalid = this.isValid();
        const senhasValidas = this.senhasSaoValidas();
        if (isvalid && senhasValidas){
            alert('Formulário enviado');
            this.formulario.submit();
        }
    }

    senhasSaoValidas(){
        let valid = true;

        const senha = this.formulario.querySelector('.senha');
        const repetirSenha = this.formulario.querySelector('.repetir-senha')
        if (senha.value !== repetirSenha.value) {
            this.createError(senha, 'Os campos senha e repetir senha precisam ser iguais.');       
            this.createError(repetirSenha, 'Os campos senha e repetir senha precisam ser iguais.');       
            valid = false;
        }

        if (senha.value.length < 6 || senha.value.length > 12){
            valid = false;
            this.createError(senha, 'Senha precisa estar entre 6 e 12 caracteres.');
        }
        return valid;
    }
    isValid(){
        let valid = true;

        for(let errorText of this.formulario.querySelectorAll('.error-text')){
            errorText.remove();
        }
        
        for(let campo of this.formulario.querySelectorAll('.validar')){
            const label = campo.previousElementSibling.innerText; 
            if (!campo.value) {
                this.createError(campo, `Campo "${label}" não pode estar em branco.`);
                valid = false;
            }

            if(campo.classList.contains('cpf')){
                if(!this.validaCpf(campo)) valid = false;
            }

            if(campo.classList.contains('usuario')){
                if(!this.validaUsuario(campo)) valid = false;
            }

        }
        return valid;
    }

    validaUsuario(campo){
        const usuario = campo.value;
        let valid = true;
        if (usuario.length < 3 || usuario.length > 12){
            this.createError(campo, 'Usuário precia ter entre 3 e 12 caracteres.');
            valid = false;
        }

        if(!usuario.match(/^[a-zA-Z0-9]+$/g)){
            this.createError(campo, 'nome de usuário precisa contar apenas letra e/ou números.');
        }

        return valid;
        }

    validaCpf(campo){
        const cpf =new ValidadorDeCpf(campo.value);

        if(!cpf.formatarCpf()){
            this.createError(campo, 'CPF inválido.');
            return false;
        }
        return true
    }
    createError(campo, msg){
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);
    }
}

const valida = new ValidaFormulario();