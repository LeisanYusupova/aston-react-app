import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/app/store/store.tsx';
import { FilmCardInterface } from 'src/shared/types/types.tsx';
import {
  addToFavorites,
  removeFromFavorites,
} from 'src/features/redux/favoriteFilms/favoriteFilmsSlice.ts';

export const useFavorites = (
  film: FilmCardInterface | undefined,
  user: string | null,
) => {
  const dispatch = useDispatch();
  const films = useSelector((state: RootState) => state.favorites.films);

  const isFavorite = films.some((item) => item.id === film?.id);

  const handleFavoritesClick = async () => {
    if (!film) {
      return;
    }
    if (isFavorite) {
      dispatch(removeFromFavorites({ id: film?.id, user }));
    } else {
      dispatch(addToFavorites({ film, user }));
    }
  };

  return { isFavorite, handleFavoritesClick };
};
