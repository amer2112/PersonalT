<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['email'];
    file_put_contents('user_emails.txt', $email . PHP_EOL, FILE_APPEND);
    echo 'Email saved';
}
?>
