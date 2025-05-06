<?php

require_once __DIR__ . '/../database/connection.php';
require_once __DIR__ . '/../controllers/TrafficController.php';

$controller = new TrafficController($pdo);
$controller->track();

// ... tutaj Twój normalny kod strony
echo "<p>Witamy na stronie!</p>";
