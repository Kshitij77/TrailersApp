export interface Movies {
  results?: (ResultsEntity)[] | null;
  page: number;
  total_results: number;
  dates: Dates;
  total_pages: number;
}
export interface ResultsEntity {
  popularity: number;
  vote_count: number;
  video: boolean;
  poster_path: string;
  id: number;
  adult: boolean;
  backdrop_path: string;
  original_language: string;
  original_title: string;
  genre_ids?: (number)[] | null;
  title: string;
  vote_average: number;
  overview: string;
  release_date: string;
}
export interface Dates {
  maximum: string;
  minimum: string;
}
/*
export interface Movies {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection?: null;
    budget: number;
    genres?: (GenresEntity)[] | null;
    homepage: string;
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path?: null;
    production_companies?: (ProductionCompaniesEntity)[] | null;
    production_countries?: (ProductionCountriesEntity)[] | null;
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages?: (SpokenLanguagesEntity)[] | null;
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }
  export interface GenresEntity {
    id: number;
    name: string;
  }
  export interface ProductionCompaniesEntity {
    id: number;
    logo_path?: string | null;
    name: string;
    origin_country: string;
  }
  export interface ProductionCountriesEntity {
    iso_3166_1: string;
    name: string;
  }
  export interface SpokenLanguagesEntity {
    iso_639_1: string;
    name: string;
  }
*/