import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FilmCardInterface } from 'src/shared/types/types.tsx';
import { RootState } from 'src/app/store/store.tsx';
import {
  addToFavorites,
  removeFromFavorites,
} from 'src/features/favoriteFilms/favoriteFilmsSlice.ts';
import s from './FilmCard.module.css';

export const FilmCard = (props: FilmCardInterface) => {
  const dispatch = useDispatch();
  const isFavorite = useSelector((state: RootState) =>
    state.favorites.films.some((item) => item.id === props.id),
  );
  const handleFavoritesClick = (props: FilmCardInterface) => {
    if (isFavorite === true) {
      dispatch(removeFromFavorites(props.id));
    } else {
      dispatch(addToFavorites(props));
    }
  };
  return (
    <div className={s.card_wrapper}>
      <img src={`${props.image}`} alt="Превью изображение" />
      <div className={s.card_container}>
        <span>{props.name}</span>
        <span>{props.country}</span>
        <span>{props.year}</span>

        <div className={s.button_wrapper}>
          <Link to={`/${props.id}`}>
            <button className={s.card_button}>Подробнее</button>
          </Link>
          <button
            className={s.card_button}
            onClick={() => handleFavoritesClick(props)}
          >
            {isFavorite ? 'Удалить из избранного' : 'Добавить в избранное'}
          </button>
        </div>
      </div>
    </div>
  );
};
