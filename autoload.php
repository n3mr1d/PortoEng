<?php
// load config .php
require_once __DIR__ . "/config.php";


// load all function in folder /function

foreach (glob(__DIR__ . '/resource/function/*.php') as $file) {
    require_once $file;
}