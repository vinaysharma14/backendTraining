<?php
$servername="127.0.0.1";
$username="root";
$password="goldtree9";
$database="todoList";
$connection=new mysqli($servername,$username,$password,$database);
$key=$_REQUEST['index'];
$item=$_POST['item'];

$query="UPDATE taskTable SET task='$item' WHERE id=$key";
if ($connection->query($query) === TRUE)
    header("Location: index.php");
else 
    echo "Error";
$connection->close();
?>