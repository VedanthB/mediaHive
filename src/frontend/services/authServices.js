import axios from 'axios';

export const loginService = (userData) => {
  return axios.post('api/auth/login', userData);
};

export const signupService = (userData) => {
  return axios.post('api/auth/signup', userData);
};
