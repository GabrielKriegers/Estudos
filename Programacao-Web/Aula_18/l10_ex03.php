<?php

if(isset($_POST['nome']) && isset($_POST['idade'])){
    if($_POST['idade'] >= 18){
        print "Você é maior de idade.";
    }else{
        print "Você é menor de idade.";
    }
}else{
    print "Os dados não foram informados.";
}

?>