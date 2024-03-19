import { createListenerMiddleware } from '@reduxjs/toolkit';
import {
  addToFavorites,
  removeFromFavorites,
} from 'src/features/redux/favoriteFilms/favoriteFilmsSlice.ts';

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
        const filteredData: number[] = storageData.favorites.filter(
          (item: number) => item !== action.payload.film,
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
