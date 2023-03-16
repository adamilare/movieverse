import axios from 'axios';

class MovieService {
  moveAPI;

  movieLists;

  constructor() {
    this.moveAPI = 'https://api.tvmaze.com/shows';
    this.movieLists = [];
  }

  getAllTvShows = async () => {
    try {
      const response = await axios.get(this.moveAPI);
      return response.data;
    } catch (error) {
      return error;
    }
  };

  searchShows = async (search) => {
    try {
      const response = await axios.get(
        `https://api.tvmaze.com/search/shows?q=${search}`,
      );
      return response.data;
    } catch (error) {
      return error;
    }
  };

  saveMovies = (movies) => {
    this.movieLists = movies;
  };

  getAllMovies = () => this.movieLists;
}

const movieservice = new MovieService();

export default movieservice;
