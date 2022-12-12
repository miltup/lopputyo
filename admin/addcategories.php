<?php
require_once '../inc/functions.php';
require_once '../inc/headers.php';

$input = json_decode(file_get_contents('php://input'));
$category_name = filter_var($input->category_name,FILTER_SANITIZE_FULL_SPECIAL_CHARS);

try {
    $db = createSqliteConnection("../lopputyo.db");
    
    $sql = "INSERT INTO category (category_name) VALUES ('$category_name')";
    
    $query = $db->query ($sql);
    
    $data = array('category_id' => $db->lastInsertId(), 'category_name' => $category_name);
    header('HTTP/1.1 200 OK');
    print json_encode($data);

} catch (PDOException $pdoex) {
        returnError($pdoex);
}
