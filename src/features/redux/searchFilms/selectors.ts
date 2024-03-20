import { RootState } from 'src/app/store/store.tsx';

export const getSearchSelector = (state: RootState) => state.searchFilms;
