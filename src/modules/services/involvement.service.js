import axios from "axios";

class InvolvementAPI {
  baseAPI;

  appid;

  constructor() {
    this.baseAPI =
      "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/";
    this.appid = "cmBfvUR5C3jDMA4cKIK2";
  }

  saveMovieLikes = async (movieid) => {
    try {
      const response = await axios.post(
        `${this.baseAPI}apps/${this.appid}/likes`,
        {
          item_id: movieid,
        }
      );
      return response;
    } catch (error) {
      return error;
    }
  };

  saveMovieComment = async (movieId, commenter, comment) => {
    try {
      const response = await axios.post(
        `${this.baseAPI}apps/${this.appid}/comments`,
        {
          item_id: movieId,
          username: commenter,
          comment,
        }
      );
      return response;
    } catch (error) {
      return error;
    }
  };

  getMovieComments = async (movieId) => {
    try {
      const response = await axios.get(
        `${this.baseAPI}apps/${this.appid}/comments?item_id=${movieId}`
      );
      return response.data;
    } catch (error) {
      return error;
    }
  };

  getAllMovieLikes = async () => {
    try {
      const response = await axios.get(
        `${this.baseAPI}apps/${this.appid}/likes`
      );
      return response.data;
    } catch (error) {
      return error;
    }
  };
}

export default InvolvementAPI;
