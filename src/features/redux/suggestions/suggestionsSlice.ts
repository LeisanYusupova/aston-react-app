import { createSlice } from '@reduxjs/toolkit';
import { SearchFilmInterface } from 'src/shared/types/types.tsx';

type SuggestionsState = {
  suggestions: SearchFilmInterface[];
};
const initialState: SuggestionsState = {
  suggestions: [],
};

export const suggestionsSlice = createSlice({
  name: 'suggestions',
  initialState,
  reducers: {
    setSuggestions: (state, action) => {
      state.suggestions = action.payload;
    },
    removeSuggestions: (state) => {
      state.suggestions = [];
    },
  },
});

export const { setSuggestions, removeSuggestions } = suggestionsSlice.actions;

export default suggestionsSlice.reducer;
