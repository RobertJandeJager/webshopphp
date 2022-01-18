<?php

/**
 * (var_)dump variable(s)
 * No params, just get vars from func_get_args function
 */
function dd()
{
    $args = func_get_args();

    if (count($args))
    {
        echo "<pre>";

        foreach ($args as $arg)
        {
            var_dump($arg);
        }

        echo "</pre>";
        
        die();
    }

}


/**
 * Create a HTML hidden input element with a token
 * When posting data the value of this hidden field 
 * will be compared with the one in the session
 * This comparission is done in the Request class (App\Libraies\Request)
 */
function generateFormTokenHTML()
{
    return "<input type=\"hidden\" value=\"" . createToken() . "\" name=\"f_token\">";
}

function isAjax()
{
    return isset($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest';
}

function exception_handler()
{
    
}

function getRequestMethod()
{
    return $_SERVER['REQUEST_METHOD'];
}

function getPage()
{
    return array_key_exists('page', $_GET) ? $_GET['page'] : 'home';
}

function getFunction()
{
    return array_key_exists('function', $_GET) ? $_GET['function'] : 'index';
}

function render($view, $data = array())
{
    require $_SERVER['DOCUMENT_ROOT'] . '/assets/views/' . $view . '.view.php';
}