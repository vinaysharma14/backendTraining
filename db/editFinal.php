<?php
require_once("connectDatabase.php");
$connection=db();
$key=$_REQUEST['index'];
$item=$_POST['item'];

$query="UPDATE taskTable SET task='$item' WHERE id=$key";
if ($connection->query($query) === TRUE)
    header("Location: index.php");
else 
    echo "Error";
$connection->close();
?>