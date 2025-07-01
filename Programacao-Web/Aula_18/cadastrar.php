<?php
// 1ª parte
// inclui o arquivo que faz a conexão no SGBD
include "conectar.php";

// 2ª parte
// Verifica se o formulário foi enviado via método POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recebe os dados do formulário
    $nome = $_POST['nome'];
    $email = $_POST['email'];

    // Valida os dados - verifica se os dois não estão vazios
    if (!empty($nome) && !empty($email)) {
        // Prepara a SQL para evitar SQL Injection
        $stmt = $conn->prepare("INSERT INTO usuarios (nome, email) VALUES (?, ?)");
        $stmt->bind_param("ss", $nome, $email);

        // executa o SQL e verifica se o retorno foi positivo
        if ($stmt->execute()) {
            echo "<p>Usuário cadastrado com sucesso!</p>";
        } else {
            echo "<p>Erro ao inserir registro: " . $stmt->error . "</p>";
        }
        // fecha a consulta
        $stmt->close();
    } else {
        echo "<p>Erro: Por favor, preencha todos os campos.</p>";
    }
}
// Fecha a conexão com o mariaDB - importante!
$conn->close();
?>

<!-- 
3ª parte - Nosso formulário de cadastro, aqui ele está em uma versão minimalista,
porém deve estar em um arquivo HTML com todos os cabeçalhos, estilos, etc. 
-->
<form action="cadastrar.php" method="post">
    Nome: <input type="text" name="nome"><br>
    Email: <input type="email" name="email"><br>
    <input type="submit" value="Cadastrar">
</form>