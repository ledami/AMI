<?php
function conectar(){
    $host = "localhost";
    $database = "datamart";
    $username = "postgres";
    $password = "admin";
    $conn = pg_connect("host=".$host." dbname=".$database." user=".$username." password=".$password)
        or die('No se ha podido conectar: ' . pg_last_error());
    if($conn==false){
        echo 'Error conexion';
    }
    return $conn;
}
function consulta($sql, $conn){
    $ok = true;
    $rs = pg_query($conn, $sql);
    $data_points = array();
    while ($row = pg_fetch_object($rs)) {
        array_push($data_points, $row);
    }
    print json_encode($data_points);
}
function consulta_array($sql, $conn){
    $ok = true;
    $rs = pg_query($conn, $sql);
    $data_points = array();
    return $data_points;
}
function desconectar($conn){
    pg_close($conn);
}
?>
