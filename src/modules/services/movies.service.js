import axios from 'axios';

class MovieService {
  moveAPI;

  constructor() {
    this.moveAPI = 'https://api.tvmaze.com/shows';
  }

  getAllTvShows = async () => {
    try {
      const response = await axios.get(this.moveAPI);
      return response.data;
    } catch (error) {
      return error;
    }
  };
}

export default MovieService;
