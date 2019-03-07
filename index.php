<?php
    $a=$_POST["number"];
    $b=$_POST["multiple"];
    for($i=0;$i<=$b;$i++)
    {
        echo ("$a*$i=");
        echo $a*$i;
        echo '<br><br>';
    }
?>