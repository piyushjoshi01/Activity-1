import axios from "axios";

const request = axios.create({
  baseURL: "https://f80m7rijt5.execute-api.us-east-1.amazonaws.com/dev/",

  timeout: 12400000,
  responseType: "json",
});

export default request;
