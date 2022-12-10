<?php
require_once '../inc/functions.php';
require_once '../inc/headers.php';

$input = json_decode(file_get_contents('php://input'));

$fullname = filter_var($input->fullname, FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$street = filter_var($input->street, FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$zipcode = intval(filter_var($input->zipcode, FILTER_SANITIZE_FULL_SPECIAL_CHARS));
$city = filter_var($input->city, FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$phone = intval(filter_var($input->phone, FILTER_SANITIZE_FULL_SPECIAL_CHARS));
$email = filter_var($input->email, FILTER_SANITIZE_FULL_SPECIAL_CHARS);


try{
    $db = createSqliteConnection('../lopputyo.db');

    $sql = "INSERT INTO client (client_name, street, zipcode, city, phone, email) VALUES 
    ('$fullname','$street', $zipcode,'$city', $phone,'$email')";

    $client_id = executeInsert($db, $sql);
    
   // $query = $db->query ($sql);

    $data = array('id' => $client_id, 'name' => $fullname, 'street' => $street, 'zipcode' => $zipcode, 'city' => $city, 'phone' => $phone, 'email' => $email);
    header('HTTP/1.1 200 OK');
    print json_encode($data);
} catch (PDOException $pdoex) {
    returnError($pdoex);
}
