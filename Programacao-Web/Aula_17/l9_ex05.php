<?php

$estoque = ['Camiseta Básica' => 120 , 'Tênis Esportivo' => 3, 'Mochila Executiva' => 30, 'Fone de Ouvido Bluetooth' => 75, 'Smartwatch' => 50];
foreach ($estoque as $produto => $qnt){
    if ($qnt >= 4){
        print "Produto: $produto<br> Em estoque: $qnt <br>";
    }
}

?>