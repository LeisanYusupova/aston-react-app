import { getFavoriteFilmsSelector } from 'src/features/redux/favoriteFilms/selectors.ts';
import { useAppSelector } from 'src/shared/hooks/hook.ts';
import { FavoriteFilmCard } from 'src/entities/favoriteFilm';
import s from './FavoritesFilms.module.css';

export const FavoritesFilms = () => {
  const filmIds = useAppSelector(getFavoriteFilmsSelector);
  if (filmIds.length === 0) {
    return (
      <div className={s.info_message}>
        Здесь будут отображаться ваши избранные фильмы
      </div>
    );
  } else {
    return (
      <div>
        <h2 className={s.heading}>Избранные фильмы</h2>
        <div className={s.list_wrapper}>
          {filmIds.map((item) => (
            <FavoriteFilmCard id={item} key={item} />
          ))}
        </div>
      </div>
    );
  }
};
