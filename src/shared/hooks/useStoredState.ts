import { useDispatch } from 'react-redux';
import { getCurrentUser } from 'src/shared/utils/user.ts';
import { setUser } from 'src/features/redux/userProcess/userProcessSlice.ts';
import {
  getCurrenSearch,
  getFavoriteItems,
  getSearchItems,
} from 'src/shared/utils/storage.ts';
import { setFavoritesFromState } from 'src/features/redux/favoriteFilms/favoriteFilmsSlice.ts';
import {
  setCurrentSearch,
  setSearchFromStorage,
} from 'src/features/redux/searchFilms/searchFilmsSlice.ts';

export const useStoredState = () => {
  const dispatch = useDispatch();
  const user = getCurrentUser();

  const currentSearch = getCurrenSearch();
  if (currentSearch) {
    dispatch(setCurrentSearch(currentSearch));
  }

  if (user) {
    dispatch(setUser({ email: user }));
    const favorites = getFavoriteItems(user);
    if (favorites) {
      const data = favorites.favorites;
      dispatch(setFavoritesFromState({ films: data, user: user }));
    }
    const search = getSearchItems(user);
    if (search) {
      const data = search.keywords;
      dispatch(
        setSearchFromStorage({
          keywords: data,
          user: user,
        }),
      );
    }
  }
};
