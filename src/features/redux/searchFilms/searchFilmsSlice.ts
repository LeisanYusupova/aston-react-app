import { createSlice } from '@reduxjs/toolkit';
import { SearchFilmsState } from 'src/shared/types/types.tsx';

const initialState: SearchFilmsState = {
  keywords: [],
  user: null,
  currentSearch: '',
};

export const searchFilms = createSlice({
  name: 'searchFilms',
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.keywords.push(action.payload.keywords);
      state.user = action.payload.user;
    },
    setCurrentSearch: (state, action) => {
      state.currentSearch = action.payload;
    },
    setSearchFromStorage: (state, action) => {
      state.keywords = action.payload.keywords;
      state.user = action.payload.user;
    },
    removeSearch: (state) => {
      state.keywords = [];
      state.user = null;
    },
  },
});

export const {
  setSearch,
  setCurrentSearch,
  setSearchFromStorage,
  removeSearch,
} = searchFilms.actions;

export default searchFilms.reducer;
