function loadListeners() {
    document.getElementById('convertToList').addEventListener('click', changeToList, true);
    document.getElementById('convertToCard').addEventListener('click', changeToCard, true);
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


document.addEventListener("DOMContentLoaded", loadListeners(), false);