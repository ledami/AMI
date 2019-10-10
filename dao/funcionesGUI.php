<?php
ini_set("display_errors", "on");
header('Content-Type: application/json');
include 'DAO.php';

$sql = "";

if(isset($_GET["func"])){
$func = $_GET["func"];

$conn = conectar();

if($func == "getTemas"){
	$sql = "SELECT DISTINCT TEMA AS label FROM DM_DEMOGRAFIA";
}else if($func == "getAsuntos" && isset($_GET["tema"])){
	$tema = $_GET["tema"];
	$sql = "SELECT DISTINCT ASUNTO AS label FROM DM_DEMOGRAFIA WHERE TEMA = '".$tema."'";
}

consulta($sql, $conn);
desconectar($conn);
}
?>