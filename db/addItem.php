<?php
require_once("connectDatabase.php");
$connection=db();
$item=$_POST['item'];
$query="INSERT into taskTable (task,isCompleted) values ('$item',0)";
if ($connection->query($query) === TRUE) 
    header("Location: index.php");
else 
    echo "Error";
$connection->close();
?>