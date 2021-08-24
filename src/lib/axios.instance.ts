import axios from 'axios';

/**
 * This is used only by sessions API.
 * This is needed for logging and signing up because
 * of different headers if user is authenticated or not.
 */
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_API_URL
});

export default axiosInstance;
