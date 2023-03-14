import InvolvementAPI from './services/involvement.service.js';
import { mapMoviesAndLikes, displayMovieShows } from './displayMovieShows.js';
import movieservice from './services/movies.service.js';

const invovlementapi = new InvolvementAPI();

const likeMovie = (movieListContainer) => {
  movieListContainer.addEventListener('click', (e) => {
    let movieid;

    if (e.target.matches('svg path')) {
      movieid = e.target.parentNode.parentNode.getAttribute('id');
    } else if (e.target.matches('button svg')) {
      movieid = e.target.parentNode.getAttribute('id');
    }

    const allMovies = movieservice.getAllMovies();

    invovlementapi.saveMovieLikes(movieid).then((response) => {
      if (response.status === 201) {
        const likedMovie = allMovies.find(
          (movie) => movie.id === Number(movieid),
        );

        if (likedMovie) {
          likedMovie.likes += 1;
        }

        displayMovieShows(allMovies, movieListContainer);
      }
    });
  });
};

const getLikes = (movieList) => {
  invovlementapi.getAllMovieLikes().then((likes) => {
    if (likes.length) {
      mapMoviesAndLikes(likes, movieList);
    }
  });
};

export { getLikes, likeMovie };
