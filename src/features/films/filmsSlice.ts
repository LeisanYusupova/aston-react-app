import { API_KEY } from 'src/api/API.tsx';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const filmsApi = createApi({
  reducerPath: 'filmsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://kinopoiskapiunofficial.tech',
    prepareHeaders: (headers) => {
      headers.set('X-API-KEY', API_KEY);
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getFilms: builder.query({
      query: () => 'api/v2.2/films',
      transformResponse: (response) => {
        return response.items.slice(8);
      },
    }),
    getFilmDetails: builder.query({
      query: (id: string) => ({
        url: `/api/v2.2/films/${id}`,
      }),
    }),
  }),
});

export const { useGetFilmsQuery, useGetFilmDetailsQuery } = filmsApi;
