import { Movie } from './Movie/index.js';
console.log('funguju!');

//   V hlavním souboru index.js vytvořte komponentu Movie, která bude zobrazovat jeden film. Rozmyslete si, jaké props má tato komponenta přijímat.

// Využijte vaši nově vytvořenou komponentu k zobrazování filmů.
fetch('https://apps.kodim.cz/daweb/trening-api/apis/movie-api/movies')
  .then((response) => response.json())
  .then((films) => {
    films.forEach((film) => {
      document.querySelector('.movie-list').innerHTML += Movie(film);
    });
  });

// Nyní oddělte komponentu do vlastní složky. Ve vašem projektu vytvořte složku Movie se souborem index.js. Do tohoto souboru přesuňte kód komponenty Movie.
// Komponentu Movie správně exportujte a v hlavním index.js správně importujte.
// Ve složce Movie také vytvořte soubor style.css a přesuňte do něj styly související s komponentou.
// Do souboru index.html vložte styly pro komponentu a vyzkoušejte, že váš projekt správně funguje.
