<?php
$richtlijnen = file_get_contents("richtlijnen.JSON");

header('Content-Type: application/json');
print_r($richtlijnen);
