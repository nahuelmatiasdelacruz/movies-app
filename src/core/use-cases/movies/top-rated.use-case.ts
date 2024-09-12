import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { TopRatedResponse } from "../../../infrastructure/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import { Movie } from "../../entities/movie.entity";

export const topRatedUseCase = async ( fetcher: HttpAdapter ): Promise<Movie[]> => {
  try {
    const topRated: TopRatedResponse = await fetcher.get<TopRatedResponse>('/top_rated');
    return topRated.results.map((result)=>MovieMapper.fromMovieDbResultToEntity(result));
  } catch (e) {
    console.log(e)
    throw new Error(`Error fetching movies - Top Rated`);
  };
};