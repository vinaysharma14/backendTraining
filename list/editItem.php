<?php
session_start();
$link .= $_SERVER['REQUEST_URI']; 
$link=substr($link,14);
$id=strtok($link,'=');
?>

<html>
<head>
<title>To-Do</title>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
</head>
<body>
<div class="container">
<h2>To Do List</h2>
<form action="index.php" method="POST">
<div class="form-group">
<label for="item">Edit Item</label>
<input type="text" class="form-control" placeholder="Enter item here" name="item">
</div>
<button type="submit" class="btn btn-success">Edit</button>
</form>
</div>
<?php
    echo $id;
?>
</body>
</html>
<!-- $list=[
    [task=>abc,
    taskcompleted=>yes,
    ],
    [task=>abc,
    taskcompleted=>yes,
    ],
    [task=>abc,
    taskcompleted=>yes,
    ],
    [task=>abc,
    taskcompleted=>yes,
    ],
    
] -->
