<?php 
session_start();
$i=$_REQUEST['index'];
array_splice($_SESSION['toDoArray'],$i,1);
header("Location: index.php");
?> 