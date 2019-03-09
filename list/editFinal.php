<?php
session_start();
$key=$_REQUEST['index'];
$item=$_POST['item'];
$_SESSION['toDoArray'][$key]=$item;
header("Location: index.php");
?>