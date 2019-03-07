<?php 
session_start();
$link .= $_SERVER['REQUEST_URI']; 
$link=substr($link,14);
$id=strtok($link,'=');
echo $id;
?> 