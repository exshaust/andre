<?php
// Configuration
$db_host = 'localhost';
$db_username = 'root';
$db_password = '';
$db_name = 'ydatabase';

// Connect to database
$conn = new mysqli($db_host, $db_username, $db_password, $db_name);

// Check connection
if ($conn->connect_error) {
	die("Connection failed: ". $conn->connect_error);
}

// Get posted data
$username = $_POST['username'];
$password = $_POST['password'];

// Query to check if user exists
$query = "SELECT * FROM users WHERE username='$username' AND password='$password'";
$result = $conn->query($query);

if ($result->num_rows > 0) {
	echo 'uccess';
} else {
	echo 'Invalid username or password.';
}

$conn->close();
?>