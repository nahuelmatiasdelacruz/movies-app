export interface TopRatedResponse {
  page: number;
  results: MovieDB[];
  total_pages: number;
  total_results: number;
}

export interface PopularResponse {
  page: number;
  results: MovieDB[];
  total_pages: number;
  total_results: number;
}

export interface UpcomingResponse {
  dates: Dates;
  page: number;
  results: MovieDB[];
  total_pages: number;
  total_results: number;
}

export interface NowPlayingResponse {
  dates: Dates;
  page: number;
  results: MovieDB[];
  total_pages: number;
  total_results: number;
}

export interface Dates {
  maximum: Date;
  minimum: Date;
}

export interface MovieDB {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: Date;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
