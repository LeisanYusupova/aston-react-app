import { useDispatch } from 'react-redux';
import { useAppSelector } from 'src/shared/hooks/hook.ts';
import { getFavoriteFilmsSelector } from 'src/features/redux/favoriteFilms/selectors.ts';
import {
  addToFavorites,
  removeFromFavorites,
} from 'src/features/redux/favoriteFilms/favoriteFilmsSlice.ts';
import { FilmCardInterface } from 'src/shared/types/types.tsx';

export const useFavorites = (film: number | undefined, user: string | null) => {
  const dispatch = useDispatch();
  const films = useAppSelector(getFavoriteFilmsSelector);
  const isFavorite = films.some((item) => item === film);

  const handleFavoritesClick = async () => {
    if (!film) {
      return;
    }
    if (isFavorite) {
      dispatch(removeFromFavorites({ film, user }));
    } else {
      dispatch(addToFavorites({ film, user }));
    }
  };

  return { isFavorite, handleFavoritesClick };
};

export const useFavoritesDetail = (
  film: FilmCardInterface | undefined,
  user: string | null,
) => {
  const dispatch = useDispatch();
  const films = useAppSelector(getFavoriteFilmsSelector);
  const isFavorite = films.some((item) => film && item === film!.id);

  const handleFavoritesClick = async () => {
    if (!film) {
      return;
    }
    if (isFavorite) {
      dispatch(removeFromFavorites({ film: film.id, user }));
    } else {
      dispatch(addToFavorites({ film: film.id, user }));
    }
  };

  return { isFavorite, handleFavoritesClick };
};
