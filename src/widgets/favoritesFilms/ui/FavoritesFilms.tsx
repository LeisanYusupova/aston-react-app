import { useSelector } from 'react-redux';
import { FavoriteFilmInterface } from 'src/shared/types/types.tsx';
import { FilmCard } from 'src/entities/film';
import { RootState } from 'src/app/store/store.tsx';
import s from './FavoritesFilms.module.css';

export const FavoritesFilms = () => {
  const { films } = useSelector((state: RootState) => state.favorites);
  if (films) {
    return (
      <div className={s.list_wrapper}>
        {(films!.length > 0 && console.log(films)) ||
          films.map((item: FavoriteFilmInterface) => (
            <FilmCard
              key={item.id}
              id={item.id}
              name={item.name}
              country={item.country}
              year={item.year}
              image={item.image}
            />
          ))}
      </div>
    );
  }
};
