import axios from "axios";

const ApiInstance = axios.create({
  baseURL: "https://lichess.org/api",
});

export default ApiInstance;
