import { useEffect, useState } from "react"
import { Movie } from "../../core/entities/movie.entity"
import * as UseCases from '../../core/use-cases';
import { movieDBFetcher } from "../../config/adapters/movieDB.adapter";

let popularPageNumber: number = 1;

export const useMovies = () => {
  const [nowPlaying,setNowPlayingMovies] = useState<Movie[]>([]);
  const [popular,setPopular] = useState<Movie[]>([]);
  const [topRated,setTopRated] = useState<Movie[]>([]);
  const [upcoming,setUpcoming] = useState<Movie[]>([]);
  const [isLoading,setIsLoading] = useState<boolean>(true);

  useEffect(()=>{
    initialLoad();
  },[]);

  const initialLoad = async () => {
    const nowPlayingPromise = UseCases.moviesNowPlayingUseCase(movieDBFetcher);
    const popularPromise = UseCases.popularUseCase(movieDBFetcher);
    const topRatedPromise = UseCases.topRatedUseCase(movieDBFetcher);
    const upcomingPromise = UseCases.upcomingUseCase(movieDBFetcher);
    const [nowPlayingMovies,popularMovies,topRatedMovies,upcomingMovies] = await Promise.all([
      nowPlayingPromise,
      popularPromise,
      topRatedPromise,
      upcomingPromise,
    ]);
    setNowPlayingMovies(nowPlayingMovies);
    setPopular(popularMovies);
    setUpcoming(upcomingMovies);
    setTopRated(topRatedMovies);
    setIsLoading(false);
  }

  return {
    isLoading,
    nowPlaying,
    popular,
    topRated,
    upcoming,
    popularNextPage: async () => {
      popularPageNumber++;
      const popularMovies = await UseCases.popularUseCase(movieDBFetcher,{page: popularPageNumber});
      setPopular(prev=>[...prev,...popularMovies]);
    }
  }
}