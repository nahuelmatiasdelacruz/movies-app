import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { NowPlayingResponse } from "../../../infrastructure/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import { Movie } from "../../entities/movie.entity";

export const moviesNowPlayingUseCase = async ( fetcher: HttpAdapter ): Promise<Movie[]> => {
  try {
    const nowPlaying: NowPlayingResponse = await fetcher.get<NowPlayingResponse>('/now_playing');
    return nowPlaying.results.map((result)=>MovieMapper.fromMovieDbResultToEntity(result));
  } catch (e) {
    console.log(e)
    throw new Error(`Error fetching movies - Now Playing`);
  };
};