<?php
require '../inc/functions.php';
require '../inc/headers.php';

$uri = parse_url(filter_input(INPUT_SERVER, 'PATH_INFO'),PHP_URL_PATH);
$param = explode('/', $uri);
$category_id = $param[1];

try {
    $db = createSqliteConnection('../lopputyo.db');
    $sql = "SELECT category_name FROM category WHERE category_id = $category_id";
    $query = $db->query($sql);
    $category = $query->fetch(PDO::FETCH_ASSOC);

    $sql = "SELECT * FROM product WHERE category_id = $category_id";
    $query = $db->query($sql);
    $products = $query->fetchAll(PDO::FETCH_ASSOC);

    header('HTTP/1.1 200 OK');
    print json_encode(array(
        "category" => $category,
        "products" => $products
    ));
} catch (PDOException $pdoex) {
    returnError($pdoex);
}