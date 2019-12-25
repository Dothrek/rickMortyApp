function loadListeners() {
    document.getElementById('convertToList').addEventListener('click', changeToList, true);
    document.getElementById('convertToCard').addEventListener('click', changeToCard, true);

    Array.from(document.getElementsByClassName('favorite-button')).forEach(function(element) {
        element.addEventListener('click', toggleFav, true);
    });
}


function changeToList() {
    let div_content = $('.episode-row');
    let new_html = '<ul class="collection">';

    div_content.empty();

    episodes.forEach(element => {
        new_html += '<a href="#!" class="collection-item">' + element.episode + ' - ' + element.name + '</li>'
    });

    new_html += '</ul>';


    div_content[0].innerHTML = new_html;
}

function changeToCard() {
    let div_content = $('.episode-row');
    let new_html = '';

    div_content.empty();

    episodes.forEach(element => {
        new_html += `<div class="col s12 m6">
                        <div class="card blue-grey darken-1">
                            <div class="card-content white-text">
                                <span class="card-title">
                                ` + element.episode + ` - ` + element.name + `</span>
                                <p>Fecha de esteno: ` + element.air_date + `</p>
                            </div>
                        </div>
                    </div>
                    `;
    });

    div_content[0].innerHTML = new_html;
}

function toggleFav() {
    element = $(this);
    episode_name = element.data('episode');
    currently_faved = element.text();

    if (currently_faved === 'favorite_border') {
        is_fav = false;
    } else if (currently_faved === 'favorite') {
        is_fav = true;
    } else {
        return;
    }

    $.ajax({
        url: 'http://localhost:8000/episode/addToFavorite',
        type: 'POST',
        data: {
            'episode_name': episode_name,
            'is_fav': is_fav
        },
        success: function() {
            console.log('funciona')
            console.log(element);
        }
    });
}


document.addEventListener("DOMContentLoaded", loadListeners(), false);