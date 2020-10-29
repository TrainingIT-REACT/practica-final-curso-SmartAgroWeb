<?php

// credenciales de la base de datos

define('DB_USUARIO', 'root');
define('DB_PASSWORD', '1234javier');
define('DB_HOST', 'localhost');
define('BD_NOMBRE', 'uptask');

$conn = new mysqli(DB_HOST, DB_USUARIO, DB_PASSWORD, BD_NOMBRE);

if ($conn->connect_error) {
    echo $conn->connect_error;
}
$conn->set_charset('utf8');

//echo $conn->ping();
