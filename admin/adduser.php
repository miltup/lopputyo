<?php
require_once('../inc/functions.php');
require_once('../inc/headers.php');
require_once('./admincontrol.php');

session_start();

$body = file_get_contents('php://input');
$user = json_decode($body);

if(!isset($user->username) || !isset($user->password)){
    http_response_code('400');
    echo "Käyttäjää ei ole määritetty. Lisää käyttäjänimi ja salasana";
    return;
} 

insertUser($user->username, $user->password);

$_SESSION['username'] = $user->username;

http_response_code('200');
echo "Käyttäjä ".$user->username." lisätty.";