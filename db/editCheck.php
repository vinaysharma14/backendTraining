<?php
$servername="127.0.0.1";
$username="root";
$password="goldtree9";
$database="todoList";
$connection=new mysqli($servername,$username,$password,$database);
$key=$_REQUEST['index'];
$check=$_REQUEST['check'];
if($check==1)
{
    $query="UPDATE taskTable SET isCompleted=0 WHERE id=$key";
    if ($connection->query($query) === TRUE)
        header("Location: index.php");
    else 
        echo "Error";
}
else
{
    $query="UPDATE taskTable SET isCompleted=1 WHERE id=$key";
    if ($connection->query($query) === TRUE)
        header("Location: index.php");
    else 
        echo "Error";
}
$connection->close();
?>