import { BASE_URL } from 'constants/config';
import axios, { AxiosResponse } from 'axios';
import { getStorageItem } from 'hooks/useLocalStorage';

const instance = axios.create({
  baseURL: BASE_URL
});

const responseBody = (response: AxiosResponse) => response.data;

export const requests = {
  get: (url: string, params = {}) => {
    instance.defaults.headers.common = getAxiosHeader();
    return instance
      .get(url, {
        params
      })
      .then(responseBody);
  },
  post: (url: string, body: {}) => instance.post(url, body).then(responseBody),
  put: (url: string, body: {}) => instance.put(url, body).then(responseBody),
  delete: (url: string) => instance.delete(url).then(responseBody)
};

export const getAxiosHeader = () => {
  const token = getStorageItem('accessToken');

  return token ? { Authorization: `Bearer ${token}` } : { Authorization: `` };
};
