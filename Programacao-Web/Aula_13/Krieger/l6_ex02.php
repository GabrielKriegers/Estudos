<?php

$produto = 5.9;
$cotacao = 5.78;
$total = $produto * $cotacao;
$total = number_format($total,2);
echo "Preço em real: $total.";

?>