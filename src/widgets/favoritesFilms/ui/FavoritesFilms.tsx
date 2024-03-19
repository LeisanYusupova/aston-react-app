import { FavoriteFilmInterface } from 'src/shared/types/types.tsx';
import { FilmCard } from 'src/entities/film';
import { getFavoriteFilmsSelector } from 'src/features/redux/favoriteFilms/selectors.ts';
import { useAppSelector } from 'src/shared/hooks/hook.ts';
import s from './FavoritesFilms.module.css';

export const FavoritesFilms = () => {
  const films = useAppSelector(getFavoriteFilmsSelector);
  if (films) {
    return (
      <div className={s.list_wrapper}>
        {films!.length > 0 ? (
          films.map((item: FavoriteFilmInterface) => (
            <FilmCard
              key={item.id}
              id={item.id}
              name={item.name}
              country={item.country}
              year={item.year}
              image={item.image}
            />
          ))
        ) : (
          <span>Здесь будут отображаться ваши избранные фильмы</span>
        )}
      </div>
    );
  }
};
