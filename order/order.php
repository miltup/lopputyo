<?php
require_once '../inc/functions.php';
require_once '../inc/headers.php';

$input = json_decode(file_get_contents('php://input'));

$fullname = filter_var($input->fullname, FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$street = filter_var($input->street, FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$zipcode = intval(filter_var($input->zipcode, FILTER_SANITIZE_FULL_SPECIAL_CHARS));
$city = filter_var($input->city, FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$phone = filter_var($input->phone, FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$email = filter_var($input->email, FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$cart = $input->cart;

try{
    $db = createSqliteConnection('../lopputyo.db');

    //Asiakkaan lisäys
    $sql = "INSERT INTO client (client_name, street, zipcode, city, phone, email) VALUES 
    ('$fullname','$street', $zipcode, '$city', '$phone','$email')";
    $client_id = executeInsert($db, $sql);
    
    // Tilauksen lisäys tietokantaan
    $sql = "INSERT INTO orders (client_id) VALUES ($client_id)";
    $order_id = executeInsert($db, $sql);

    // Tilauksen tietojen ja tuotteiden lisäys
    $date = date('Y-m-d');
    foreach ($cart as $product) {
        $sql = "INSERT INTO order_row (order_id, product_id, order_date) VALUES ('
        $order_id', '$product->product_id', '$date')";
        executeInsert($db, $sql);
    }

    header('HTTP/1.1 200 OK');
    $data = array('id' => $client_id, 'name' => $fullname, 'street' => $street, 'zipcode' => $zipcode, 'city' => $city, 'phone' => $phone, 'email' => $email);
    print json_encode($data);
} catch (PDOException $pdoex) {
    returnError($pdoex);
}
