<?php

if (isset($_GET['nome'])){
   $nome = $_GET['nome'];
    echo "Olá $nome! Bem-vindo!";
}else{
    print "Informe o nome";
}


?>