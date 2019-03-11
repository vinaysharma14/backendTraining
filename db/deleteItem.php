<?php
require_once("connectDatabase.php");
$connection=db();
$key=$_REQUEST['index'];
$query="DELETE from taskTable where id=$key";
if ($connection->query($query) === TRUE)
    header("Location: index.php");
else 
    echo "Error";
$connection->close();
?>