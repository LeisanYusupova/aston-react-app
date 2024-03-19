import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'src/app/store/store.tsx';

const getFavoritesSelector = (state: RootState) => state.favorites;

export const getFavoriteFilmsSelector = createSelector(
  getFavoritesSelector,
  (favorites) => favorites.films,
);
