import './styles.css';
import movieverse from './assets/movieverse-logo.png';
import {
  homePage,
  likeMovie,
  searchMovies,
  fetchAllMovies,
  getMovieDetailsForDisplay,
} from './modules';

const mainContainer = document.querySelector('main');

window.addEventListener('DOMContentLoaded', () => {
  mainContainer.innerHTML = homePage();
  const modalContainer = document.querySelector('.modal .modal-body');

  searchMovies();

  setTimeout(() => {
    const movieListContainer = document.querySelector('.movie-container-row');
    const navbarLogo = document.querySelector('.navbar-brand img');
    navbarLogo.setAttribute('src', movieverse);
    likeMovie(movieListContainer);
    fetchAllMovies(movieListContainer);
    getMovieDetailsForDisplay(movieListContainer, modalContainer);
  }, 500);
});
