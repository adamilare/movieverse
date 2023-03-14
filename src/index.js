import './styles.css';
import './assets/movieverse-logo.png';
import {
  homePage,
  MovieService,
  displayMovieShows,
  likeMovie,
  getLikes,
} from './modules';

const mainContainer = document.querySelector('main');
const movieservice = new MovieService();

window.addEventListener('DOMContentLoaded', () => {
  mainContainer.innerHTML = homePage();

  setTimeout(() => {
    const movieListContainer = document.querySelector('.movie-container-row');
    likeMovie(movieListContainer);
    movieservice.getAllTvShows().then((result) => {
      if (result && result.length) {
        displayMovieShows(result, movieListContainer);
      }
      getLikes(result);
    });
  }, 500);
});
