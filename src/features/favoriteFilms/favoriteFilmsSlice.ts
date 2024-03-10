import { createSlice } from '@reduxjs/toolkit';
import { FavoritesState } from 'src/shared/types/types.tsx';

const initialState: FavoritesState = {
  films: [],
};

export const favoriteFilms = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      state.films.push(action.payload);
    },
    removeFromFavorites: (state, action) => {
      state.films.filter((obj) => obj.id !== action.payload);
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoriteFilms.actions;

export default favoriteFilms.reducer;
