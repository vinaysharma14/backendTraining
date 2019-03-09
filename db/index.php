<?php
$servername="127.0.0.1";
$username="root";
$password="goldtree9";
$database="todoList";
$connection=new mysqli($servername,$username,$password,$database);
$query="SELECT * from taskTable";
$result=$connection->query($query);
if($result->num_rows>0)
$connection->close();
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
        <form action="addItem.php" method="POST">
            <div class="form-group">
                <label for="item">Add Item</label>
                <input type="text" class="form-control" placeholder="Enter item here" name="item" required>
            </div>
            <button type="submit" class="btn btn-success">Submit</button>
        </form>
    </div>
    <ul class="container list-group">
    <?php if($result->num_rows>0): ?>
        <?php while($row=$result->fetch_assoc()): ?>
            <li class="list-group-item" style="height:55px;">
                <?php 
                    echo $row["task"];
                    $key=$row["id"];
                ?>
                <input class="btn btn-danger" style="float:right; margin-right:100px;" type="button" value="Delete" onclick=" location.href = 'deleteItem.php?index=<?php echo $key; ?>';">
                <input class="btn btn-primary" style="float:right; margin-right:100px;" type="button" value="Edit" onclick=" location.href = 'editItem.php?index=<?php echo $key; ?>';">
            </li>
        <?php endwhile; ?>
    <?php endif; ?>
    </ul>
</body>
</html>