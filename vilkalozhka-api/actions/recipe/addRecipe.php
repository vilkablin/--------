<?php

header('Access-Control-Allow-Origin: http://localhost:5173');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, X-Requested-With');

ini_set('log_errors', 1);
ini_set('error_log', './error.log');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header("HTTP/1.1 200 OK");
    exit;
}

include '../../database/database.php';
global $pdo;

$input = file_get_contents('php://input');
error_log("Raw input: " . $input);

$input = json_decode($input, true);
