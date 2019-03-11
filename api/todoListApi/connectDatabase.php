<?php
function db()
{
    $servername="127.0.0.1";
    $username="root";
    $password="goldtree9";
    $database="todoList";
    $connection=new mysqli($servername,$username,$password,$database);
    return $connection;
}
if(db())
{
    //successful connection
}
else
{
    echo "Failed";
}
?>