import axios from "axios";

const instanse = axios.create({
  baseURL: "http://188.225.47.84:8000/api/",
  // http://188.225.47.84:8000/api/
});

instanse.interceptors.request.use(
  function (request) {
    return request;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instanse.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default instanse;
