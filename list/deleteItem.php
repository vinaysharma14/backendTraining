<?php 
session_start();
$link .= $_SERVER['REQUEST_URI']; 
$link=substr($link,16);
$id=strtok($link,'=');
array_splice($_SESSION['toDoArray'],$id,1);
header("Location: index.php");
?> 