import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/app/store/store.tsx';
import { FilmCardInterface } from 'src/shared/types/types.tsx';
import {
  addToFavorites,
  removeFromFavorites,
} from 'src/features/redux/favoriteFilms/favoriteFilmsSlice.ts';
import { addToFavoritesDb } from 'src/shared/utils/favorites.ts';

export const useFavorites = (film: FilmCardInterface | undefined) => {
  const dispatch = useDispatch();
  const films = useSelector((state: RootState) => state.favorites.films);

  const isFavorite = films.some((item) => item.id === film?.id);
  console.log({ films, film });

  const handleFavoritesClick = async () => {
    if (!film) {
      return;
    }
    if (isFavorite) {
      dispatch(removeFromFavorites(film?.id));
    } else {
      dispatch(addToFavorites(film));
      await addToFavoritesDb(film, 'email');
    }
  };
  return { isFavorite, handleFavoritesClick };
};
