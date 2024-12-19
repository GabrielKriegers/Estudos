<?php
$planetas = [1 => 'Mercúrio', 2 => 'Vênus', 3 => 'Terra', 4 => 'Marte', 5 => 'Júpiter', 6 => 'Saturno', 7 => 'Urano', 8 => 'Netuno',];

if (isset($_GET['num'])){
    $planeta = $planetas[$_GET['num']];
    print "Você ganhou $planeta.";
}else{
    print "Digite um número.";
}


?>