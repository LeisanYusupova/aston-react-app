import { createSlice } from '@reduxjs/toolkit';
import { FavoritesState } from 'src/shared/types/types.tsx';

const initialState: FavoritesState = {
  films: [],
  user: null,
};

export const favoriteFilms = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      state.films.push(action.payload.film);
      state.user = action.payload.user;
    },
    removeFromFavorites: (state, action) => {
      const { id, user } = action.payload;
      state.films = state.films.filter((obj) => obj.id !== id);
      state.user = user;
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoriteFilms.actions;

export default favoriteFilms.reducer;
