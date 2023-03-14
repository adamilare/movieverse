const displayTotalShows = () => {
  const tvshowsLink = document.querySelectorAll('.navbar-nav li');
  const allMovies = document.querySelectorAll('.movie-card');
  tvshowsLink[0].children[0].children[0].textContent = allMovies.length;
};

export default displayTotalShows;
