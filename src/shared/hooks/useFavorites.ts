import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/app/store/store.tsx';
import { FilmCardInterface } from 'src/shared/types/types.tsx';
import {
  addToFavorites,
  removeFromFavorites,
} from 'src/features/redux/favoriteFilms/favoriteFilmsSlice.ts';

export const useFavorites = (film: FilmCardInterface) => {
  const dispatch = useDispatch();
  const isFavorite = useSelector((state: RootState) =>
    state.favorites.films.some((item) => item.id === film.id),
  );

  const handleFavoritesClick = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(film.id));
    } else {
      dispatch(addToFavorites(film));
    }
  };

  return { isFavorite, handleFavoritesClick };
};
