import axios, { AxiosError, CanceledError } from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "399f87397d954e20a35af6902d9ac423",
  },
});

export { AxiosError, CanceledError };
