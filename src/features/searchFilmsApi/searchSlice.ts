import { API_KEY } from 'src/api/API.tsx';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const searchApi = createApi({
  reducerPath: 'searchApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://kinopoiskapiunofficial.tech',
    prepareHeaders: (headers) => {
      headers.set('X-API-KEY', API_KEY);
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    searchFilms: builder.query({
      query: (keyword: string) =>
        `api/v2.1/films/search-by-keyword?keyword=${keyword}`,
    }),
  }),
});

export const { useSearchFilmsQuery } = searchApi;
