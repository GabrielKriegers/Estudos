<h1>Minha página única</h1>

<?php
if(isset($_GET['nome']) && isset($_GET['idade'])){
    $nome = $_GET['nome'];
    $idade = $_GET['idade'];
    echo "Olá $nome! Você tem $idade anos.";

}else{
    print 'Erro você não informou os dados.';
}


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="" method="get">
        <label for="nome">Nome: </label>
        <input type="text" id="nome" name="nome">

        <label for="idade">Idade: </label>
        <input type="text" name="idade" id="idade">

        <button type="submit">Enviar</button>
    </form>
</body>
</html>