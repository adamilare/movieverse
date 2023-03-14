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
                <div class="image-container" style="background-image: url(${movie.image.original})">
                </div>
                <div class="card-body">
                  <div class="d-flex align-items-center justify-content-between">
                    <h5 class="card-title">${movie.name}</h5>
      
                    <div class="flex">
                      <button type="button" class="likeBtn">
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
                      <span>2 likes</span>
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

const displayTotalShows = (movies) => {
  const tvshowsLink = document.querySelectorAll('.navbar-nav li');
  tvshowsLink[0].children[0].children[0].textContent = movies.length;
};

const displayMovieShows = (movies, movieListContainer) => {
  const result = getMoviesInHtml(movies);
  displayTotalShows(movies);
  movieListContainer.innerHTML = result;
};

export default displayMovieShows;
