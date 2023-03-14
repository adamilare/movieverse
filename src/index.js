import './styles.css';
import './assets/movieverse-logo.png';
import { homePage, MovieService, displayMovieShows } from './modules';

const mainContainer = document.querySelector('main');
const movieservice = new MovieService();

window.addEventListener('DOMContentLoaded', () => {
  mainContainer.innerHTML = homePage();

  setTimeout(() => {
    const movieListContainer = document.querySelector('.movie-container-row');
    movieservice.getAllTvShows().then((result) => {
      if (result && result.length) {
        displayMovieShows(result, movieListContainer);
      }
    });
  }, 500);
});
