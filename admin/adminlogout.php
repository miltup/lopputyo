<?php
require_once('../inc/functions.php');
require_once('../inc/headers.php');
require_once('./admincontrol.php');
session_start();

session_destroy();

unset($_SESSION['username']);

http_response_code('200');
echo "Sinut on kirjattu ulos.";