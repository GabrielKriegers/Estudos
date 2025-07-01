<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulário com GET</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f9f9f9;
        }
        form {
            max-width: 400px;
            margin: 0 auto;
            padding: 20px;
            background: #ffffff;
            border: 1px solid #ccc;
            border-radius: 4px;
        }
        label, input, button {
            display: block;
            width: 100%;
            margin-bottom: 10px;
        }
        button {
            padding: 10px;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }
        button:hover {
            background-color: #0056b3;
        }
    </style>
</head>
<body>
    <h1>Tudo em um arquivo só!</h1>
    <?php
    if (isset($_GET['nome']) && isset($_GET['idade'])) {
        $nome = $_GET['nome'];
        $idade = $_GET['idade'];
        echo "<p>Olá, $nome! Você tem $idade anos.</p>";
    } else {
        $saida = <<< FIM
        <form action="" method="get">
            <label for="nome">Nome:</label>
            <input type="text" id="nome" name="nome" required>
            
            <label for="idade">Idade:</label>
            <input type="number" id="idade" name="idade" required>
            
            <button type="submit">Enviar</button>
        </form>
        FIM;
        echo $saida;
    }
    ?>
</body>
</html>
