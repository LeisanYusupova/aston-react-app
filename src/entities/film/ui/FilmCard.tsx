import { Link } from 'react-router-dom';
import { FilmCardInterface } from 'src/shared/types/types.tsx';
import { useAuth } from 'src/shared/hooks/useAuth.ts';
import { useFavorites } from 'src/shared/hooks/useFavorites.ts';
import PropTypes from 'prop-types';
import s from './FilmCard.module.css';

export const FilmCard = (props: FilmCardInterface) => {
  const { isAuth, email } = useAuth();
  const { isFavorite, handleFavoritesClick } = useFavorites(props.id, email);
  return (
    <div className={s.card_wrapper}>
      <img
        className={s.card_image}
        src={`${props.image}`}
        height={200}
        alt="Превью изображение"
      />
      <div className={s.card_container}>
        <span className={s.card_heading}>{props.name}</span>
        <span>{props.country}</span>
        <span>{props.year}</span>

        <div className={s.button_wrapper}>
          <Link to={`/${props.id}`}>
            <button className={s.card_button}>Подробнее</button>
          </Link>
          {isAuth && (
            <button className={s.card_button} onClick={handleFavoritesClick}>
              {isFavorite ? 'Удалить из избранного' : 'Добавить в избранное'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

FilmCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string,
  country: PropTypes.string.isRequired,
  year: PropTypes.number,
  image: PropTypes.string.isRequired,
  nameOriginal: PropTypes.string,
  description: PropTypes.string,
};
