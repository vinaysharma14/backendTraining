<?php
session_start();
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
                <input type="text" class="form-control" id="email" placeholder="Enter item here" name="item">
            </div>
            <button type="submit" class="btn btn-success">Submit</button>
        </form>
    </div>
    <?php
    echo '<form>';
    echo '<ul class="container list-group">';
    if(count($_SESSION['toDoArray']>0))
    {
        $i=0;
        foreach($_SESSION['toDoArray'] as $value)
        {
            echo '<li id="elm" class="list-group-item" style="height:55px">';
            echo $value;
            echo '<button class="btn btn-danger" style="float:right; margin-right:100px;" name="'.$i.'" formaction="deleteItem.php" method="GET">Delete</button>';
            echo '<button class="btn btn-primary" style="float:right; margin-right:100px;" name="'.$i.'" formaction="editItem.php" method="GET">Edit</button></li>';
            $i=$i+1;
        }
    }
    echo '</ul>';
    echo '</form>';
    ?>
</body>
</html>