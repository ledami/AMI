<!DOCTYPE html>
<html>
    <head>
        <title>AMI</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="css/bootstrap.min.css">
        <link rel="stylesheet" href="css/login.css">
        <script src="js/jquery-3.3.1.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
    </head>
    <body>
	<?php
	header('Location: inicio.php'); 
	?>
       <!-- <div class="content-login">
            <form class="login" action="login.php" method="post">
                <h1 class="login-title">Dashboard AMI</h1>
                <div class="errormsj">
                    <?php
                    // session_start();
					// if(isset($_SESSION['msj'])){
					//	echo $_SESSION['msj'];
					// }
                    ?>
                </div>
                <input name="usuario" type="text" class="login-input" placeholder="Usuario" autofocus>
                <input name="contrasena" type="password" class="login-input" placeholder="Contraseña">
                <input type="submit" value="Entrar" class="login-button">
            </form>
        </div>-->
    </body>
</html>