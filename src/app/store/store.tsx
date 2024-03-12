import { configureStore } from '@reduxjs/toolkit';
import { filmsApi } from 'src/features/films/filmsSlice.ts';
import { searchApi } from 'src/features/searchFilmsApi/searchSlice.ts';
import userProcessReducer from 'src/features/userProcess/userProcessSlice.ts';
import favoritesReducer from '../../features/favoriteFilms/favoriteFilmsSlice.ts';
import searchFilmsReducer from '../../features/searchFilms/searchFilmsSlice.ts';

export const store = configureStore({
  reducer: {
    [filmsApi.reducerPath]: filmsApi.reducer,
    [searchApi.reducerPath]: searchApi.reducer,
    favorites: favoritesReducer,
    userProcess: userProcessReducer,
    searchFilms: searchFilmsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(filmsApi.middleware)
      .concat(searchApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
