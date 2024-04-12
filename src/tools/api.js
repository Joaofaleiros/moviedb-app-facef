import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZTQ4ODU3MDRkNjYyODJkOTk3YWQ0MTdmODc4NGE1YyIsInN1YiI6IjY2MTg3ZDJmMGYwZGE1MDE3Y2RlYzhkNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ffAx5mYdSKXXH3C5j8y3eONMLPkr19Xk-S8ZN8aMvHw`,
  },
});

export default api;
