import { createSlice } from '@reduxjs/toolkit';
import { SearchFilmsState } from 'src/shared/types/types.tsx';

const initialState: SearchFilmsState = {
  keywords: [],
};

export const searchFilms = createSlice({
  name: 'searchFilms',
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.keywords.push(action.payload);
    },
  },
});

export const { setSearch } = searchFilms.actions;

export default searchFilms.reducer;
