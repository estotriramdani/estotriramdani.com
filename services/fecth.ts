import axios, { AxiosRequestConfig } from 'axios';

export async function fetchAPI(url: string, options?: AxiosRequestConfig) {
  try {
    const response = await axios(url, options);
    const responseData = response.data;
    return responseData;
  } catch (error) {
    throw error;
  }
}

export const swrArgs = (
  url: string,
  options: AxiosRequestConfig = { method: 'GET' }
) => {
  return [url, options];
};
