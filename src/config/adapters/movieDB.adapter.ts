import { MOVIEDB_KEY } from "@env";
import { AxiosAdapter } from "./http/axios.adapter";

export const movieDBFetcher = new AxiosAdapter({
  baseUrl: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: MOVIEDB_KEY ?? 'no-key',
    language: 'es'
  }
});