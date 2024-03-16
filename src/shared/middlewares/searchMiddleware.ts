import { createListenerMiddleware } from '@reduxjs/toolkit';
import { setSearch } from 'src/features/redux/searchFilms/searchFilmsSlice.ts';

export const listenerMiddleware = createListenerMiddleware();
listenerMiddleware.startListening({
  actionCreator: setSearch,
  effect: async (action) => {
    localStorage.setItem('keyword', action.payload.keywords);
  },
});
