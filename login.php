<?php
$user = $_POST['usuario'];
$pw =$_POST['contrasena'];
session_start();
if($user == 'admin' && $pw == '123'){
    $_SESSION['msj']= '';
   header('Location: inicio.php'); 
}else{
    $_SESSION['msj']= 'Usuario y/o Contraseña invalidos.';
    header('Location: index.php'); 
    
}
?>