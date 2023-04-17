export const Movie = (props) => {
  return `<li class="movie-detail">
  <div class="movie-poster">
    <img
      src="${props.posterUrl}"
      alt="${props.title}"
    />
  </div>
  <div class="movie-info">
    <h2 class="movie-title">${props.title}</h2>
    <div class="movie-year">Rok vydání:${props.year}</div>
    <div class="movie-link">
      <a href="${props.url}" target="_blank">Odkaz na CSFD</a>
    </div>
  </div>
  </li>`;
};
