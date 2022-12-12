<?php
require_once('../inc/functions.php');
require_once('../inc/headers.php');
require_once('./admincontrol.php');
session_start();

if(isset($_SESSION['username'])){
    http_response_code('200');
    echo $_SESSION['username'];
    return;
}

if(!isset($_POST['username']) || !isset($_POST['password'])){
    http_response_code('401');
    echo "Käyttäjää ei ole määritetty. Lisää käyttäjänimi ja salasana";
    return;
}

$username = $_POST['username'];
$password = $_POST['password'];

$verified_username = checkUser($username, $password);

if ($verified_username) {
    $_SESSION['username'] = $verified_username;
    http_response_code('200');
    echo $verified_username;
} else {
    http_response_code('401');
    echo "Väärä käyttäjänimi tai salasana.";
}
