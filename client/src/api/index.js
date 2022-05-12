import axios from 'axios';

const $api = axios.create({
  withCredentials: true,
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api/',
});

const $auth_api = axios.create({
  withCredentials: true,
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api/',
});

//перехватываем запрос
$auth_api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
});

// перехватываем ответ с сервера если 401 то обновляем access токен
$auth_api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status == 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        const response = null; // TO DO: axios => 'refresh'

        localStorage.setItem('token', response.data.accessToken);
        return $auth_api.request(originalRequest);
      } catch (e) {
        console.log('НЕ АВТОРИЗОВАН');
      }
    }
    throw error;
  }
);

export { $api, $auth_api };
