<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

require_once("connectDatabase.php");
$connection=db();

$query="SELECT * from taskTable";
$result=$connection->query($query);

$todoArray=array();

class todoItem
{
    public $id;
    public $task;
    public $isCompleted;
    public function setValues($x,$y,$z)
    {
        $this->id=$x;
        $this->task=$y;
        $this->isCompleted=$z;
    }
}

if($result->num_rows>0)
{
    while($row=$result->fetch_assoc())
    {
        $todoObj=new todoItem();
        $todoObj->setValues($row["id"],$row["task"],$row["isCompleted"]);
        array_push($todoArray,$todoObj);
    }
}

$todoJSON=json_encode($todoArray);
echo $todoJSON;
?>