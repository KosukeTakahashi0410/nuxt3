import axios from "axios";

const axiosInstance = axios.create();

export default defineNuxtPlugin(() => {
  return {
    provide: {
      axios: axiosInstance,
    },
  };
});
