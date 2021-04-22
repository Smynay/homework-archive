const apiEndpoint = "https://api.punkapi.com/v2/";
const beerEndpoint = apiEndpoint + "beers";

function fetchBeers() {
  return fetch(beerEndpoint)
    .then((response) => response.json())
    .then((result) => result);
}

module.exports = { fetchBeers };
