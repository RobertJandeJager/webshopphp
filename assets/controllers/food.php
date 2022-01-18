<?php

function index($view)
{
    $foods = require 'data/foods.php';

    return require $_SERVER['DOCUMENT_ROOT'] . '/assets/views/' . $view . '.view.php';
}