import { BEER_ENDPOINT } from "../constants";

export function fetchBeers() {
  return fetch(BEER_ENDPOINT)
    .then((response) => response.json())
    .then((result) => result);
}
