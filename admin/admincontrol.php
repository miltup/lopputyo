<?php
require_once('../inc/functions.php');
require_once('../inc/headers.php');

// Adding user
function insertUser ($username, $password) {
    $db = createSqliteConnection('../lopputyo.db');

    $password = password_hash($password, PASSWORD_DEFAULT);

    $sql = "INSERT INTO user_info (username, user_password) VALUES (?, ?)";
    $statement = $db->prepare($sql);
    $statement->execute(array($username, $password));
}

// Checking credentials

function checkUser($username, $password) {
    $db = createSqliteConnection('../lopputyo.db');

    $sql = "SELECT user_password FROM user_info WHERE username=?";
    $statement = $db->prepare($sql);
    $statement->execute(array($username));

    $hashed_password = $statement->fetchColumn();
    
    if(isset($hashed_password)) {
        return password_verify($password, $hashed_password) ? $username : null;
    }

    return null;
}