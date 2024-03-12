export type CountriesType = {
  country: string;
};

export type GenresType = {
  genre: string;
};

export interface FilmInterface {
  kinopoiskId: number;
  imdbId: string;
  nameRu: string;
  nameEn: string;
  nameOriginal: string;
  countries: CountriesType[];
  genres: GenresType[];
  ratingKinopoisk: number;
  ratingImdb: number;
  year: number;
  type: string;
  posterUrl: string;
  posterUrlPreview: string;
}

export interface FilmsInterface {
  items: FilmInterface[];
}

export interface SearchInterfaceFromApi {
  films: SearchFilmInterface[];
}

export interface FavoriteFilmInterface {
  id: number;
  name: string;
  country: string;
  year: number;
  image: string;
}

export type FilmCardInterface = {
  id: number;
  name: string;
  country: string;
  year: number;
  image: string;
};

export type FavoritesState = {
  films: FavoriteFilmInterface[];
};

export type UserProcessState = {
  email: string | null;
  id: string | null;
};

export type SearchFilmsState = {
  keywords: string[];
};

export interface FilmDetailInterface {
  kinopoiskId: number;
  kinopoiskHDId: string;
  imdbId: string;
  nameRu: string;
  nameEn: string;
  nameOriginal: string;
  posterUrl: string;
  posterUrlPreview: string;
  coverUrl: string;
  logoUrl: string;
  reviewsCount: number;
  ratingGoodReview: number;
  ratingGoodReviewVoteCount: number;
  ratingKinopoisk: number;
  ratingKinopoiskVoteCount: number;
  ratingImdb: number;
  ratingImdbVoteCount: number;
  ratingFilmCritics: number;
  ratingFilmCriticsVoteCount: number;
  ratingAwait: number;
  ratingAwaitCount: number;
  ratingRfCritics: number;
  ratingRfCriticsVoteCount: number;
  webUrl: string;
  year: number;
  filmLength: string;
  slogan: string;
  description: string;
  shortDescription: string;
  editorAnnotation: string;
  isTicketsAvailable: false;
  productionStatus: string;
  type: string;
  ratingMpaa: string;
  ratingAgeLimits: string;
  countries: CountriesType[];
  genres: GenresType[];
  startYear: number;
  endYear: number;
  serial: false;
  shortFilm: false;
  completed: false;
  hasImax: false;
  has3D: false;
  lastSync: string;
}

export interface SearchFilmInterface {
  filmId: number;
  nameRu: string;
  nameEn: string;
  type: string;
  year: number;
  description: string;
  filmLength: string;
  countries: CountriesType[];
  genres: GenresType[];
  rating: string;
  ratingVoteCount: string;
  posterUrl: string;
  posterUrlPreview: string;
}
export enum AppRoute {
  Signin = 'signin',
  Root = '/',
  Id = ':id',
  Favorites = 'favorites',
  Signup = 'signup',
  Search = 'search',
  History = 'history',
}
