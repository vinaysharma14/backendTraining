<?php
$servername="127.0.0.1";
$username="root";
$password="goldtree9";
$database="todoList";
$connection=new mysqli($servername,$username,$password,$database);
$item=$_POST['item'];
$query="INSERT into task (task,isCompleted) values ('$item',0)";
if ($connection->query($query) === TRUE) 
    header("Location: index.php");
else 
    echo "Error";
$connection->close();
?>