import axios from 'axios';
import movieservice from '../services/movies.service.js';
import displayTotalShows from '../totalMovies.js';

document.body.innerHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<nav class="navbar navbar-expand-lg fixed-top">
<div class="container">
  <a class="navbar-brand" href="#">
    <img
      src=""
      width="22%"
      alt="movieverse"
    />
    MovieVerse
  </a>
  <button
    class="navbar-toggler"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
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
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#"
          >TV Shows <span class="badge">0</span></a
        >
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"
          >Movies</a
        >
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"
          >Movie Schedules</a
        >
      </li>
    </ul>
  </div>
</div>
</nav>
    
    <main class="container main-container">
        <div class="row movie-container-row"></div>
  </main>
</body>
</html>
`;

describe('Item list Counter', () => {
  let fetchTvShowsSpy;
  let fakeDisplayMovieShows;
  let mainContainer;
  const fakeData = [
    {
      id: 1,
      name: 'Under the Dome',
      likes: 2,
      ratings: 6.5,
    },
    {
      id: 2,
      name: 'Person of Interest',
      likes: 2,
      ratings: 8.8,
    },
    {
      id: 3,
      name: 'Bitten',
      likes: 4,
      ratings: 7.4,
    },
  ];

  beforeEach(() => {
    mainContainer = document.querySelector('.main-container');

    fakeDisplayMovieShows = jest.fn((movies) => {
      if (movies.length) {
        const rowContainer = document.querySelector('.movie-container-row');
        let html = '';
        movies.forEach((movie) => {
          html += `
          <div class="col-lg-4 col-md-6 col-sm-12 col-12">
            <div class="movie-card">
                <h5 class="card-title">${movie.name}</h5>
            </div>
          </div>
          `;
        });

        rowContainer.innerHTML = html;
      }
    });

    fetchTvShowsSpy = jest.spyOn(axios, 'get');
  });

  it('main-container should be defined', () => {
    expect(mainContainer).toBeDefined();
  });

  it('list of items rendered on the DOM should be equal to the number of items from the api', async () => {
    fetchTvShowsSpy.mockReturnValueOnce({
      data: fakeData,
    });

    const movies = await movieservice.getAllTvShows();
    fakeDisplayMovieShows(movies);
    const movieCards = document.querySelectorAll('.movie-card');

    expect(movieCards.length).toEqual(fakeData.length);
  });

  it('item counter on the navbar should be equal to the total list of movie card', async () => {
    fetchTvShowsSpy.mockReturnValueOnce({
      data: fakeData,
    });
    const movies = await movieservice.getAllTvShows();
    fakeDisplayMovieShows(movies);
    displayTotalShows();
    const tvshowsLink = document.querySelectorAll('.navbar-nav li');
    const allMovies = document.querySelectorAll('.movie-card');
    expect(tvshowsLink[0].children[0].children[0].textContent).toEqual(
      String(allMovies.length),
    );
  });
});
