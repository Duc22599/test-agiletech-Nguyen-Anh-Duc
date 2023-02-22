import axios from "axios";

const getToken = () => {
  const token = sessionStorage.getItem("token");
  const bearer = token ? `Bearer ${token}` : undefined;

  return bearer;
};

export const instance = axios.create({
  baseURL: "https://test-react.agiletech.vn/",
  timeout: 10000,
  headers: {
    "X-Custom-Header": "foobar",
    Authorization: getToken(),
  },
});

instance.interceptors.request.use((config) => {
  config.headers.Authorization = getToken();

  return config;
});
