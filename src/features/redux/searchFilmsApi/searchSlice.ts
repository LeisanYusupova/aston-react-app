import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  SearchFilmInterface,
  SearchInterfaceFromApi,
} from 'src/shared/types/types.tsx';

export const searchApi = createApi({
  reducerPath: 'searchApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://kinopoiskapiunofficial.tech',
    prepareHeaders: (headers) => {
      headers.set('X-API-KEY', import.meta.env.VITE_APIKEY);
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    searchFilms: builder.query({
      query: (keyword: string) =>
        `api/v2.1/films/search-by-keyword?keyword=${keyword}`,
      transformResponse: (
        response: SearchInterfaceFromApi,
      ): SearchFilmInterface[] => {
        return response.films;
      },
    }),
  }),
});

export const { useSearchFilmsQuery } = searchApi;
