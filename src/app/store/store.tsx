import { configureStore } from '@reduxjs/toolkit';
import { filmsApi } from 'src/features/films/filmsSlice.ts';
import favoritesReducer from '../../features/favoriteFilms/favoriteFilmsSlice.ts';

export const store = configureStore({
  reducer: {
    [filmsApi.reducerPath]: filmsApi.reducer,
    favorites: favoritesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(filmsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
