<?php
if(isset($_GET['nome']) && isset($_GET['idade'])){
    $nome = $_GET['nome'];
    $idade = $_GET['idade'];
    echo "Olá $nome! Você tem $idade anos.";

}else{
    print 'Erro você não informou os dados.';
}


?>