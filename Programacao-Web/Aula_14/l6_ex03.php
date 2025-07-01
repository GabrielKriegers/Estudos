<?php

$preco = 23;
$desconto = 0.05;
$desconto_valor = $preco * $desconto;
$preco_final = $preco - $desconto_valor;

echo "Preço original: $preco <br/> 
Valor do desconto: $desconto_valor <br/>
Preço final: $preco_final";

?>