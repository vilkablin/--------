<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

ini_set('log_errors', 1);
ini_set('error_log', './error.log');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  header("HTTP/1.1 200 OK");
  exit;
}

include '../../database/database.php';
include '../../utils.php';

$headers = getallheaders();

echo '<pre>';
var_dump($headers['Authorization']);
echo '</pre>';


?>
