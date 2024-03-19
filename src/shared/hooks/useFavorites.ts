import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/app/store/store.tsx';
import {
  addToFavorites,
  removeFromFavorites,
} from 'src/features/redux/favoriteFilms/favoriteFilmsSlice.ts';
import { FilmCardInterface } from 'src/shared/types/types.tsx';

export const useFavorites = (film: number | undefined, user: string | null) => {
  const dispatch = useDispatch();
  const films = useSelector((state: RootState) => state.favorites.films);

  const isFavorite = films.some((item) => item === film);

  const handleFavoritesClick = async () => {
    if (!film) {
      return;
    }
    if (isFavorite) {
      console.log(film);
      dispatch(removeFromFavorites({ film, user }));
    } else {
      console.log(film);
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
  const films = useSelector((state: RootState) => state.favorites.films);
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
