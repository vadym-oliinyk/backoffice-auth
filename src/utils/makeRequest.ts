import axios, { AxiosResponse } from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.npoint.io',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
});

export function makeRequest(url: string): Promise<AxiosResponse<any, any>> {
  return axiosInstance.get(url);
}
