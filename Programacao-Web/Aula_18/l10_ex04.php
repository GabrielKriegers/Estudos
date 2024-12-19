<?php

if (isset($_GET['CEP'])){
   $CEP = $_GET['CEP'];
   if ($CEP == '88495000'){
    print "Cidade Garopaba. <br>Frete R$10,00.";
   }elseif($CEP == '88790000'){
    print "Cidade Laguna. <br>Frete R$40,00.";
   }else if($CEP == '88780000' || $CEP == '88900071'){
    print "Cidade Imbituba. <br>Frete R$20,00.";
   }elseif($CEP == '88490000'){
    print "Cidade Paulo Lopes. <br>Frete R$30,00.";
   }
}else{
    print "CEP não reconhecido.";
}

?>