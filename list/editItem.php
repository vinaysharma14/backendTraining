<?php
    session_start();
    $key=$_REQUEST['index'];
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
        <h2>Edit To Do Item</h2>
        <form action="editFinal.php?index=<?php echo $key;?>" method="POST">
            <div class="form-group">
                <label for="item">Edit Item</label>
                <input type="text" class="form-control" placeholder="Edit item here" name="item" required>
            </div>
            <button type="submit" class="btn btn-success">Edit</button>
        </form>
    </div>
    <form>
</body>
</html>