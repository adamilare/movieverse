import InvolvementAPI from './services/involvement.service.js';
import { mapMoviesAndLikes } from './displayMovieShows.js';

const invovlementapi = new InvolvementAPI();

const likeMovie = (movieListContainer) => {
  movieListContainer.addEventListener('click', (e) => {
    const id = e.target.parentNode.getAttribute('id');
    invovlementapi.saveMovieLikes(id);
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
