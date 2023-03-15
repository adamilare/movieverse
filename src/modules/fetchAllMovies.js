import movieservice from './services/movies.service.js';
import { displayMovieShows } from './displayMovieShows.js';
import { getLikes } from './likeMovie.js';

const fetchAllMovies = (movieListContainer) => {
  movieservice.getAllTvShows().then((result) => {
    if (result && result.length) {
      movieservice.saveMovies(result);
      displayMovieShows(result, movieListContainer);
    }
    getLikes(result);
  });
};

export default fetchAllMovies;
