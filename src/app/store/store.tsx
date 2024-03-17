import { configureStore } from '@reduxjs/toolkit';
import { filmsApi } from 'src/features/redux/filmsApi/filmsSlice.ts';
import { searchApi } from 'src/features/redux/searchFilmsApi/searchSlice.ts';
import userProcessReducer from 'src/features/redux/userProcess/userProcessSlice.ts';
import favoritesReducer from 'src/features/redux/favoriteFilms/favoriteFilmsSlice.ts';
import searchFilmsReducer from 'src/features/redux/searchFilms/searchFilmsSlice.ts';
import suggestionsReducer from 'src/features/redux/suggestions/suggestionsSlice.ts';
import { listenerMiddleware } from 'src/shared/middlewares/searchMiddleware.ts';
import { listenerMiddlewareFavorites } from 'src/shared/middlewares/favoritesMiddleware.ts';

export const store = configureStore({
  reducer: {
    [filmsApi.reducerPath]: filmsApi.reducer,
    [searchApi.reducerPath]: searchApi.reducer,
    favorites: favoritesReducer,
    userProcess: userProcessReducer,
    searchFilms: searchFilmsReducer,
    suggestions: suggestionsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(filmsApi.middleware)
      .concat(searchApi.middleware)
      .prepend(
        listenerMiddleware.middleware,
        listenerMiddlewareFavorites.middleware,
      ),
});

export type RootState = ReturnType<typeof store.getState>;
