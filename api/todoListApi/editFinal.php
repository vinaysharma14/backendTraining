<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

require_once("connectDatabase.php");
$connection=db();

$jsonContent=json_decode(file_get_contents('php://input'),true);
$key=$jsonContent["id"];
$item=$jsonContent["name"];

$query="UPDATE taskTable SET task='$item' WHERE id=$key";
$connection->query($query);
$connection->close();

?>