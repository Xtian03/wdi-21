import axios from "axios";

const GithubHelpers = {
  getUser() {
    const url = `https://api.github.com/users/jashkenas`;
    return axios.get(url);
  }
};

export default GithubHelpers;
