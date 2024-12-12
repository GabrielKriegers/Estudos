<?php
if(isset($_POST['nome']) && isset($_POST['idade'])){
    $nome = $_POST['nome'];
    $idade = $_POST['idade'];
    echo "Olá $nome! Você tem $idade anos.";

}else{
    print 'Erro você não informou os dados.';
}


?>