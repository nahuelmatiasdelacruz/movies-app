import { FullMovie, Movie } from "../../core/entities/movie.entity";
import { MovieDB, MovieDBMovie } from "../interfaces/movie-db.responses";

export class MovieMapper {
  static fromMovieDbResultToEntity(result: MovieDB): Movie {
    return {
      backdrop: `https://image.tmdb.org/t/p/w500${result.backdrop_path}`,
      description: result.overview,
      id: result.id,
      poster: `https://image.tmdb.org/t/p/w500${result.poster_path}`,
      rating: result.vote_average,
      releaseDate: new Date(result.release_date),
      title: result.title,
    };
  };
  static fromMovieDBToEntity(movie: MovieDBMovie): FullMovie {
    return {
      backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
      description: movie.overview,
      id: movie.id,
      poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      rating: movie.vote_average,
      releaseDate: new Date(movie.release_date),
      title: movie.title,
      genres: movie.genres.map((genre)=>genre.name),
      duration: movie.runtime,
      budget: movie.budget,
      originalTitle: movie.original_title,
      productionCompanies: movie.production_companies.map((company)=>company.name)
    }
  }
};