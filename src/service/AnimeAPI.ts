import axios, { AxiosInstance } from "axios";
/**
Base Class for API's Which contains Axios Instance
**/
class AnimeAPI {
  protected HEADERS: any;
  protected AnimeAPI: AxiosInstance;
  static baseUrl = "https://gogoanime.consumet.stream"; //import.meta.env.BASE_URL;
  static HEADERS = {
    "Content-Type": "application/json",
  };

  // Create a New API Instance Class
  constructor() {
    this.AnimeAPI = getInstance();
  }
}

const createInstance = () => {
  const instance = axios.create({
    baseURL: AnimeAPI.baseUrl,
    timeout: 40000,
    headers: AnimeAPI.HEADERS,
  });
  let config;
  instance.interceptors.request.use(
    async (config) => {
      let { headers, params } = config;
      const axiosRequest = {
        ...config,
        headers,
        params: params,
      };
      return axiosRequest;
    },
    (err: any) => Promise.reject(err)
  );

  instance.interceptors.response.use(undefined, (error: any) => {
    if (error.config && error.response?.status) {
      const { config, response } = error;
      const { status } = response;
      switch (status) {
        case 401: {
          console.error("Error 401:");
          break;
        }
        default: {
          return Promise.reject(error);
        }
      }
    }
    return Promise.reject(error);
  });
  (window as any).axiosInstance = instance;
  return instance;
};

const getInstance = () => {
  if ((window as any).axiosInstance) {
    return (window as any).axiosInstance;
  } else {
    return createInstance();
  }
};

export default AnimeAPI;
