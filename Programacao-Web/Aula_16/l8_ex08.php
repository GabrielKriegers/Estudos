<?php
$amostra = 0;
do {
    if($amostra % 2 == 0){
        echo "Amostra $amostra. Vida encontrada.<br>";
    }else{
    echo "Amostra $amostra. Vida não encontrada.<br>";
    }
    $amostra ++;
}while ($amostra <=13)

?>