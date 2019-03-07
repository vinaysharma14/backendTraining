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
        <h2>To Do Form</h2>
        <form action="addItem.php" method="POST">
            <div class="form-group">
                <label for="item">Add Item</label>
                <input type="text" class="form-control" id="email" placeholder="Enter item here" name="item">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
    <?php
    if( count( $_SESSION['toDoArray']) > 0)
    {
        echo '<ul>';
        echo '<li>' . implode( '</li><li>', $_SESSION['toDoArray']) . '</li>';
        echo '</ul>';
    }
    ?>
</body>

</html>