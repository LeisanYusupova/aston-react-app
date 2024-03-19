import { createListenerMiddleware } from '@reduxjs/toolkit';
import {
  addToFavorites,
  removeFromFavorites,
} from 'src/features/redux/favoriteFilms/favoriteFilmsSlice.ts';
import { FavoriteFilmInterface } from 'src/shared/types/types.tsx';

export const listenerMiddlewareFavorites = createListenerMiddleware();

listenerMiddlewareFavorites.startListening({
  actionCreator: addToFavorites,
  effect: async (action) => {
    if (action.payload.user) {
      const data = localStorage.getItem(`${action.payload.user}-favorites`);
      if (data) {
        const storageData = JSON.parse(data);
        if (storageData.favorites.length > 0) {
          storageData.favorites.push(action.payload.film);
          localStorage.setItem(
            `${action.payload.user}-favorites`,
            JSON.stringify(storageData),
          );
        } else {
          const newData = { favorites: [action.payload.film] };
          localStorage.setItem(
            `${action.payload.user}-favorites`,
            JSON.stringify(newData),
          );
        }
      } else {
        const newData = { favorites: [action.payload.film] };
        localStorage.setItem(
          `${action.payload.user}-favorites`,
          JSON.stringify(newData),
        );
      }
    }
  },
});

listenerMiddlewareFavorites.startListening({
  actionCreator: removeFromFavorites,
  effect: async (action) => {
    if (action.payload.user) {
      const data = localStorage.getItem(`${action.payload.user}-favorites`);
      if (data) {
        const storageData = JSON.parse(data);
        const filteredData: FavoriteFilmInterface[] =
          storageData.favorites.filter(
            (item: FavoriteFilmInterface) => item.id !== action.payload.id,
          );
        storageData.favorites = filteredData;
        localStorage.setItem(
          `${action.payload.user}-favorites`,
          JSON.stringify(storageData),
        );
      }
    }
  },
});
