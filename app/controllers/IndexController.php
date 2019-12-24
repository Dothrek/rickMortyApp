<?php

use Phalcon\Mvc\Controller;

class IndexController extends Controller
{
    public function indexAction()
    {

        $this->assets->addCss("https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css", false);
    
        $this->assets->addJs("https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js", false);
    

    }
}