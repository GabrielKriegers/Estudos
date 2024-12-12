<?php

$notas = [4, 6, 3, 10, 8];
$media = 0;
foreach ($notas as $nota){
    $media += $nota;
}
$media /= sizeof($notas);
print "A média do aluno é $media";

?>