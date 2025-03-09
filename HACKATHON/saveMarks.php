<?php
$servername = "localhost"; // Change if needed
$username = "root"; // Your database username
$password = ""; // Your database password
$dbname = "school_db"; // Your database name

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$student_id = $_POST['student_id'];
$subject = $_POST['subject'];
$marks = $_POST['marks'];

$sql = "INSERT INTO marks (student_id, subject, marks) VALUES ('$student_id', '$subject', '$marks')";

if ($conn->query($sql) === TRUE) {
    echo "Marks added successfully!";
} else {
    echo "Error: " . $conn->error;
}

$conn->close();
?>