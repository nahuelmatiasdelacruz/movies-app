import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { UpcomingResponse } from "../../../infrastructure/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import { Movie } from "../../entities/movie.entity";

export const upcomingUseCase = async ( fetcher: HttpAdapter ): Promise<Movie[]> => {
  try {
    const upcoming: UpcomingResponse = await fetcher.get<UpcomingResponse>('/upcoming');
    return upcoming.results.map((result)=>MovieMapper.fromMovieDbResultToEntity(result));
  } catch (e) {
    console.log(e)
    throw new Error(`Error fetching movies - Upcoming`);
  };
};