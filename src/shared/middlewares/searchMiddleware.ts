import { createListenerMiddleware } from '@reduxjs/toolkit';
import { setSearch } from 'src/features/redux/searchFilms/searchFilmsSlice.ts';

export const listenerMiddleware = createListenerMiddleware();
listenerMiddleware.startListening({
  actionCreator: setSearch,
  effect: async (action) => {
    if (action.payload.user) {
      const data = localStorage.getItem(action.payload.user);
      if (data) {
        const storageData = JSON.parse(data);
        storageData.keywords.push(action.payload.keywords);
        localStorage.setItem(action.payload.user, JSON.stringify(storageData));
      } else {
        const newData = { keywords: [action.payload.keywords] };
        localStorage.setItem(action.payload.user, JSON.stringify(newData));
      }
    }
  },
});
