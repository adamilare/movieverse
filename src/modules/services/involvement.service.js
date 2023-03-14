import axios from 'axios';

class InvolvementAPI {
  baseAPI;

  appid;

  constructor() {
    this.baseAPI = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
    this.appid = 'cmBfvUR5C3jDMA4cKIK2';
  }

  saveMovieLikes = async (movieid) => {
    try {
      const response = await axios.post(
        `${this.baseAPI}/apps/${this.appid}/likes/`,
        {
          item_id: movieid,
        },
      );
      return response;
    } catch (error) {
      return error;
    }
  };

  getAllMovieLikes = async () => {
    try {
      const response = await axios.get(
        `${this.baseAPI}apps/${this.appid}/likes`,
      );
      return response.data;
    } catch (error) {
      return error;
    }
  };
}

export default InvolvementAPI;
