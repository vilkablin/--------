<?php 

try{

$dsn = 'mysql:host=localhost;dbname=vilkalozhka';
$pdo = new PDO($dsn, 'root', 'root');
}
catch(PDOException $e) {
  die('Ошибка подключения бд ' .$e->getMessage());
}
?>