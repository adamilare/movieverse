import './styles.css';
import './assets/movieverse-logo.png';
import {
  homePage,
  movieservice,
  displayMovieShows,
  likeMovie,
  getLikes,
} from './modules';

const mainContainer = document.querySelector('main');

window.addEventListener('DOMContentLoaded', () => {
  mainContainer.innerHTML = homePage();

  setTimeout(() => {
    const movieListContainer = document.querySelector('.movie-container-row');
    likeMovie(movieListContainer);
    movieservice.getAllTvShows().then((result) => {
      if (result && result.length) {
        movieservice.saveMovies(result);
        displayMovieShows(result, movieListContainer);
      }
      getLikes(result);
    });
  }, 500);
});
