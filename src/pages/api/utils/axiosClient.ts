
import axios from 'axios';
import { cookies } from 'next/headers';
// Create an Axios instance
const axiosClient = axios.create({
  baseURL: 'http://167.172.161.102:82/api/v1/', // Set your API base URL here
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add JWT token to headers
axiosClient.interceptors.request.use((config) => {
  const accessToken = cookies().get('access');
  console.log(accessToken)
  if (accessToken) {
    config.headers.Authorization = `JWT ${accessToken}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default axiosClient;
