import './styles.css';
import movieverse from './assets/movieverse-logo.png';
import {
  homePage, likeMovie, searchMovies, fetchAllMovies,
} from './modules';

const mainContainer = document.querySelector('main');

window.addEventListener('DOMContentLoaded', () => {
  mainContainer.innerHTML = homePage();
  searchMovies();

  setTimeout(() => {
    const movieListContainer = document.querySelector('.movie-container-row');
    const navbarLogo = document.querySelector('.navbar-brand img');
    navbarLogo.setAttribute('src', movieverse);
    likeMovie(movieListContainer);
    fetchAllMovies(movieListContainer);
  }, 500);
});
