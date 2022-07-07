import axios from "axios";

export default axios.create({
  baseURL: "https://localhost:44334/",
  headers: {
    "Content-type": "application/json"
  }
});