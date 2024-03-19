import { createSlice } from '@reduxjs/toolkit';

export type InitialState = {
  films: number[];
  user: string | null;
};

const initialState: InitialState = {
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
    setFavoritesFromState: (state, action) => {
      state.films = action.payload.films;
      state.user = action.payload.user;
    },
    removeFromFavorites: (state, action) => {
      state.films = state.films.filter((obj) => obj !== action.payload.film);
      state.user = action.payload.user;
    },
    clearAllFavorites: (state) => {
      state.films = [];
      state.user = null;
    },
  },
});

export const {
  addToFavorites,
  setFavoritesFromState,
  removeFromFavorites,
  clearAllFavorites,
} = favoriteFilms.actions;

export default favoriteFilms.reducer;
