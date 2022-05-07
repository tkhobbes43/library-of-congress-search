var searchResult = document.querySelector('#search-input') 
var formatInput = document.querySelector('#format-input')
var searchButton = document.querySelector('.btn')


var buttonClickHandler = function (event) {
    event.preventDefault();
    var searchInput = searchResult.value.trim();
    var formatSelection = formatInput.value.trim();
    console.log(searchInput);
    console.log(formatSelection);
}

function getAPI() {
    var requestURL = "https://www.loc.gov/search/?q=" + searchInput + "&fo=json"   

    fetch(requestURL)
        .then(function (response) {
            response.json().then(function(data) {
                display
            })
        })
}

searchButton.addEventListener('click', buttonClickHandler)