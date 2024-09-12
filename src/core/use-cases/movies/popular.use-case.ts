import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { PopularResponse } from "../../../infrastructure/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import { Movie } from "../../entities/movie.entity";

export const popularUseCase = async ( fetcher: HttpAdapter ): Promise<Movie[]> => {
  try {
    const popular: PopularResponse = await fetcher.get<PopularResponse>('/popular');
    return popular.results.map((result)=>MovieMapper.fromMovieDbResultToEntity(result));
  } catch (e) {
    console.log(e)
    throw new Error(`Error fetching movies - Popular`);
  };
};