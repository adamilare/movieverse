import {
  fromEvent, debounceTime, distinctUntilChanged, map,
} from 'rxjs';
import movieservice from './services/movies.service.js';
import { getLikes } from './likeMovie.js';
import fetchAllMovies from './fetchAllMovies.js';

const toggleSearch = (searching) => {
  const searchButton = document.querySelector('.searchBtn');

  if (searching) {
    searchButton.innerHTML = `<div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
          </div>`;
  } else {
    searchButton.innerHTML = `            <svg
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
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>`;
  }
};

const mapResultFromSearch = (searchResult) => {
  const result = searchResult.map((movie) => movie.show);
  getLikes(result);
};

const startSearching = (search) => {
  movieservice
    .searchShows(search)
    .then((response) => {
      toggleSearch(false);
      if (response.length) {
        mapResultFromSearch(response);
      }
    })
    .catch(() => {
      toggleSearch(false);
    });
};

const searchMovies = () => {
  const input = document.querySelector('.form-control');
  fromEvent(input, 'keyup')
    .pipe(
      debounceTime(800),
      distinctUntilChanged(),
      map((event) => event.target.value),
    )
    .subscribe((search) => {
      if (search.length) {
        toggleSearch(true);
        startSearching(search);
      } else {
        const movieListContainer = document.querySelector(
          '.movie-container-row',
        );
        fetchAllMovies(movieListContainer);
      }
    });
};

export default searchMovies;
