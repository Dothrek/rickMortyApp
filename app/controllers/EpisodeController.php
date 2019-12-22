<?php

use Phalcon\Mvc\Controller;

class EpisodeController extends Controller
{
    public function indexAction()
    {

        $this->assets->addCss("https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css", false);
        $this->assets->addJs("https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js", false);
    
        $data = file_get_contents('https://rickandmortyapi.com/api/episode/');

        $data = json_decode($data, true);

        $list_episodes = array();

        foreach($data['results'] as $episode) {

            array_push($list_episodes, array('name' => $episode['name'], 'episode' => $episode['episode'], 'air_date' => $episode['air_date']));
            
        };
        
        while (!empty($data['info']['next'])) {
            
            $next_url = $data['info']['next'];
            $data = file_get_contents($next_url);
            $data = json_decode($data, true);
            
            foreach($data['results'] as $episode) {
                                
                array_push($list_episodes, array('name' => $episode['name'], 'episode' => $episode['episode'], 'air_date' => $episode['air_date']));

            };

        };

        $this->view->list_episodes = $list_episodes;

    }

}