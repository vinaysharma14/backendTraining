<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

require_once("connectDatabase.php");
$connection=db();

$jsonContent=json_decode(file_get_contents('php://input'),true);
$value=$jsonContent["name"];

$query="INSERT into taskTable (task,isCompleted) values ('$value',0)";
if ($connection->query($query) === TRUE) 
    $id = $connection->insert_id;
else 
    echo "Error";
$connection->close();

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

$todoObj=new todoItem();
$todoObj->setValues($id,$value,0);

$todoJSON=json_encode($todoObj);
echo $todoJSON;
?>