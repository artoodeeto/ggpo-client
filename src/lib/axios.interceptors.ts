import axios from 'axios';
import Cookies from 'js-cookie';

export default function axiosInterceptors(): void {
  // Add a request interceptor
  axios.interceptors.request.use(
    (config) => {
      // Do something before request is sent
      config.headers.authorization = `Bearer ${Cookies.get(process.env.REACT_APP_COOKIE_NAME as string)}`;
      return config;
    },
    (error) => {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  // Add a response interceptor
  axios.interceptors.response.use(
    (response) => {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response;
    },
    (error) => {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      return Promise.reject(error);
    }
  );
}
