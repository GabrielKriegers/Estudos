<?php
session_start();

include 'conectar.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $nome_user = trim($_POST['nome_user']);
    $senha = trim($_POST['senha']);

    try {
        $sql = "SELECT * FROM user WHERE nome_user = ?";
        $stmt = $conn->prepare($sql);


        $stmt->bind_param("s", $nome_user);

        $stmt->execute();
        $result = $stmt->get_result();


        $usuario = $result->fetch_assoc();


        if ($usuario && password_verify($senha, $usuario['senha'])) {
            $_SESSION['user_id'] = $usuario['id'];
            $_SESSION['username'] = $usuario['nome_user'];


            header('Location: Pagina_01.php');
            exit();
        } else {

            echo "Usuário ou senha incorreto!"; 
        }
    } catch (Exception $e) {
        echo "Erro ao processar o login: " . $e->getMessage();
    }
}
?>
