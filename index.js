import { Movie } from './Movie/index.js';
console.log('funguju!');

fetch('https://apps.kodim.cz/daweb/trening-api/apis/movie-api/movies')
  .then((response) => response.json())
  .then((films) => {
    films.forEach((film) => {
      document.querySelector('.movie-list').innerHTML += Movie(film);
    });
  });
