<?php
require '../inc/functions.php';
require '../inc/headers.php';

try {
    $db = createSqliteConnection('../lopputyo.db');
    selectAsJson($db, 'SELECT * FROM product');
} catch (PDOException $pdoex) {
    returnError($pdoex);
}