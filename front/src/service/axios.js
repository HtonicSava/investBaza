import axios from "axios";

const instanse = axios.create({
  baseURL: "http://5a81b485f677.ngrok.io/api/",
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
