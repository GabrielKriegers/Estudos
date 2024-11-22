<?php

$n1 = 3;
$n2 = 4;
$op = 1;
$total = 0;
switch ($op){
  case 1:
    $total = $n1 + $n2;
    break;
  case 2:
    $total = $n1 - $n2;
    break; 
  case 3:
    $total = $n1 * $n2;
    break;
  case 4:
    $total = $n1 / $n2;
    break;
  default:
    echo "Operação inválida.";
  echo "$total";
}

?>