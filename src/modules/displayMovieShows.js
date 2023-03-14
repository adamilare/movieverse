import movieservice from './services/movies.service.js';
import displayTotalShows from './totalMovies.js';

const getMoviesInHtml = (movies) => {
  if (movies.length) {
    let moviesHtml = '';

    movies.forEach((movie) => {
      let genreHtml = '';

      if (movie.genres.length) {
        movie.genres.forEach((genre) => {
          genreHtml += `<span class="badge text-bg-secondary">${genre}</span>`;
        });
      }
      moviesHtml += `
              <div class="col-lg-4 col-md-6 col-sm-12 col-12">
              <div class="movie-card card">
              <span
              class="position-absolute translate-middle p-2 bg-danger border border-light rounded-circle rating_badge"
            >
            ${movie.rating.average}
            </span>
                <div class="image-container" style="background-image: url(${
  movie.image.original
})">
                </div>
                <div class="card-body">
                  <div class="d-flex align-items-center justify-content-between">
                    <h5 class="card-title">${movie.name}</h5>
      
                    <div class="flex">
                      <button type="button" class="likeBtn" id="${movie.id}">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                          />
                        </svg>
                      </button>
                      <span>${movie.likes ? movie.likes : 0} likes</span>
                    </div>
                  </div>
                  <p class="card-text">
                    ${genreHtml}
                  </p>
                  <div class="d-grid gap-2">
                    <a href="#" class="btn btn-danger">Comment</a>
                  </div>
                </div>
              </div>
            </div>
            `;
    });

    return moviesHtml;
  }
  return '';
};

const displayMovieShows = (movies, movieListContainer) => {
  movieListContainer.innerHTML = getMoviesInHtml(movies);
  displayTotalShows();
};

const mapMoviesAndLikes = (likes, movieList) => {
  const movieListContainer = document.querySelector('.movie-container-row');

  const mappedMoviesresult = movieList.map((movie) => {
    const moveLikeInfo = likes.find(
      (like) => Number(like.item_id) === Number(movie.id),
    );
    return {
      ...movie,
      likes: moveLikeInfo ? moveLikeInfo.likes : 0,
    };
  });

  movieservice.saveMovies(mappedMoviesresult);
  displayMovieShows(mappedMoviesresult, movieListContainer);
};

export { displayMovieShows, mapMoviesAndLikes };
