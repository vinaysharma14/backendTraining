<?php
session_start();
if(!isset($_SESSION['toDoArray']))
    $_SESSION['toDoArray']=array();
array_push($_SESSION['toDoArray'],$_POST["item"]);
header("Location: index.php");
?>