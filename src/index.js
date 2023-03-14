import './styles.css';
import movieverse from './assets/movieverse-logo.png';
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
    const navbarLogo = document.querySelector('.navbar-brand img');
    navbarLogo.setAttribute('src', movieverse);
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
