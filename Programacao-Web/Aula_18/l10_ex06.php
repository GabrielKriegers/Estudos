<?php
$resultado = 0;
if (isset($_POST['num1']) && isset($_POST['operacao']) && isset($_POST['num2'])){
    $num1 = $_POST['num1'];
    $op = $_POST['operacao'];
    $num2 = $_POST['num2'];

    if ($op == 'soma'){
        $resultado = $num1 + $num2;
    }else if ($op == 'subtracao'){
        $resultado = $num1 - $num2;
    }else if ($op == 'multiplicacao'){
        $resultado = $num1 * $num2;
    }else if ($num2 == 0){
        $c = 1;
        print "Divisão por 0 não é possível.";
        exit();
    }else{
        $resultado = $num1 / $num2;
    }
        print "Resultado: $resultado.";
}else{
    print "Forneça todos os dados.";
}

?>