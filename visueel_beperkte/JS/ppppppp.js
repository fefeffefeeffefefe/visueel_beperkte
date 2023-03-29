window.addEventListener('load', init);

let apiURl = 'favorite.php';

function init() {
    gallery = document.getElementById('richtlijnen-list');
    gallery.addEventListener('click, clickHandler');

    ajaxRequest(apiURl, createPokemonCards);
}


function ajaxRequest(url, succesHandler) {
    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(succesHandler)
        .catch(ajaxErrorHandler);
}
