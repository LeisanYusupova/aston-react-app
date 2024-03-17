import { createListenerMiddleware } from '@reduxjs/toolkit';
import { addToFavorites } from 'src/features/redux/favoriteFilms/favoriteFilmsSlice.ts';

export const listenerMiddlewareFavorites = createListenerMiddleware();
listenerMiddlewareFavorites.startListening({
  actionCreator: addToFavorites,
  effect: async (action) => {
    if (action.payload.user) {
      const data = localStorage.getItem(action.payload.user);
      if (data) {
        const storageData = JSON.parse(data);
        storageData.favorites.push(action.payload.films);
        localStorage.setItem(action.payload.user, JSON.stringify(storageData));
      } else {
        const newData = { favorites: [action.payload.films] };
        localStorage.setItem(action.payload.user, JSON.stringify(newData));
      }
    }
  },
});
