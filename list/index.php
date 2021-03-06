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
                <input type="text" class="form-control" placeholder="Enter item here" name="item" required>
            </div>
            <button type="submit" class="btn btn-success">Submit</button>
        </form>
    </div>
    <form>
    <ul class="container list-group">
    <?php if(count($_SESSION['toDoArray'])): ?>
        <?php foreach($_SESSION['toDoArray'] as $key=>$value): ?>
            <li class="list-group-item" style="height:55px;">
                <?php echo $value?>
                <?php echo $i?>
                <input class="btn btn-danger" style="float:right; margin-right:100px;" type="button" value="Delete" onclick=" location.href = 'deleteItem.php?index=<?php echo $key; ?>';">
                <input class="btn btn-primary" style="float:right; margin-right:100px;" type="button" value="Edit" onclick=" location.href = 'editItem.php?index=<?php echo $key; ?>';">
            </li>
        <?php endforeach; ?>
    <?php endif; ?>
    </ul>
    </form>
</body>
</html>