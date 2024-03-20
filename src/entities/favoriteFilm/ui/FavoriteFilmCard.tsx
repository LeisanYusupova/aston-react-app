import { useGetFilmDetailsQuery } from 'src/features/redux/filmsApi/filmsSlice.ts';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useFavoritesDetail } from 'src/shared/hooks/useFavorites.ts';
import { useAuth } from 'src/shared/hooks/useAuth.ts';
import { LoadingScreen } from 'src/shared/ui/loader';
import s from './FavoriteFilmCard.module.css';

type Props = {
  id: number;
};
export const FavoriteFilmCard = ({ id }: Props) => {
  const { data, isLoading, error } = useGetFilmDetailsQuery(id.toString());
  const { isAuth, email } = useAuth();
  const { isFavorite, handleFavoritesClick } = useFavoritesDetail(data, email);
  if (isLoading) {
    return <LoadingScreen />;
  }

  if (error) {
    return <span>Error</span>;
  }
  if (data) {
    return (
      <div className={s.card_wrapper}>
        <img
          className={s.card_image}
          src={`${data.image}`}
          height={200}
          alt="Превью изображение"
        />
        <div className={s.card_container}>
          <span className={s.card_heading}>{data.name}</span>
          <span>{data.country}</span>
          <span>{data.year}</span>

          <div className={s.button_wrapper}>
            <Link to={`/${data.id}`}>
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
  }
};

FavoriteFilmCard.propTypes = {
  id: PropTypes.number.isRequired,
};
