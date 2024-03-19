import { API_KEY } from 'src/api/API.tsx';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  FilmDetailInterface,
  FilmsInterface,
  FilmCardInterface,
  FilmInterface,
} from 'src/shared/types/types.tsx';

const convertFilmForUi = ({
  kinopoiskId,
  description,
  nameRu,
  countries,
  nameOriginal,
  year,
  posterUrlPreview,
}: FilmDetailInterface): FilmCardInterface => ({
  id: kinopoiskId,
  description: description,
  name: nameRu,
  nameOriginal: nameOriginal,
  country: countries![0].country,
  year,
  image: posterUrlPreview!,
});

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
      query: () => 'api/v2.2/films?yearFrom=2024',
      transformResponse: (response: FilmsInterface): FilmInterface[] => {
        return response.items.splice(0, 12);
      },
    }),
    getFilmDetails: builder.query({
      query: (id: string) => ({
        url: `/api/v2.2/films/${id}`,
      }),
      transformResponse: (response: FilmDetailInterface): FilmCardInterface => {
        return convertFilmForUi(response);
      },
    }),
  }),
});

export const { useGetFilmsQuery, useGetFilmDetailsQuery } = filmsApi;
