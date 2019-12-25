<?php

use Phalcon\Mvc\Model;

class Favorites extends Model
{
    public $id;
    public $episode_name;
    public $is_fav;
}