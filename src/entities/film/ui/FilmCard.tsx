import { Link } from 'react-router-dom';
import { useFavorites } from 'src/shared/hooks/useFavorites.ts';
import { FilmCardInterface } from 'src/shared/types/types.tsx';
import s from './FilmCard.module.css';

export const FilmCard = (props: FilmCardInterface) => {
  const { isFavorite, handleFavoritesClick } = useFavorites(props);
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
            onClick={() => handleFavoritesClick()}
          >
            {isFavorite ? 'Удалить из избранного' : 'Добавить в избранное'}
          </button>
        </div>
      </div>
    </div>
  );
};
