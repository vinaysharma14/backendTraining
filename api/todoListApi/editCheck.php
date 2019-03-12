<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

require_once("connectDatabase.php");
$connection=db();

$jsonContent=json_decode(file_get_contents('php://input'),true);
$key=$jsonContent["id"];
$check=$jsonContent["check"];

$query="UPDATE taskTable SET isCompleted=$check WHERE id=$key";
$connection->query($query);

$connection->close();
?>