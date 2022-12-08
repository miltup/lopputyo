<?php
require '../inc/functions.php';
require '../inc/headers.php';

//Haetaan kaikki tiedot category-taulusta jsonina:
try {
    $db = createSqliteConnection('../lopputyo.db');
    selectAsJson($db, 'SELECT * FROM category');
} catch (PDOException $pdoex) {
    returnError($pdoex);
}