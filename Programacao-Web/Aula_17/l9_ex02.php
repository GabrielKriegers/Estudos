<?php

$niveis = ['1' => 20, '2' => 30, '3' => 40,'4' => 50];
$total = 0; 
foreach ($niveis as $nivel => $xp){
    echo "Você completou o nível $nivel e ganhou $xp de experiência. <br> ";
    $total += $nivel; 
}
echo "Total de experiência: $total";
?>