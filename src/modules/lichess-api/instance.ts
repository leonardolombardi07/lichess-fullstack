import axios from "axios";

const ApiInstance = axios.create({
  baseURL: "https://lichess.org/api",
  headers: {
    "content-type": "application/json",
  },
});

export default ApiInstance;
