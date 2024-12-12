<?php
$desconto = 0;
$produtos = ['Chaveiro' => 5, 'Pen-drive' => 20, 'Abacate' => 4];
foreach ($produtos as $nome => $preco){
    $desconto = $preco*0.8;
    print "Preço original: $preco <br>Preço com desconto: $desconto<br>";
}

?>