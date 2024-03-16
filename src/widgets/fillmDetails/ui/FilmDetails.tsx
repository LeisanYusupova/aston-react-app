import { useParams } from 'react-router-dom';
import { useGetFilmDetailsQuery } from 'src/features/redux/filmsApi/filmsSlice.ts';
import { LoadingScreen } from 'src/shared/ui/loader';
import { useAuth } from 'src/shared/hooks/useAuth.ts';
import PropTypes from 'prop-types';
import { useFavorites } from 'src/shared/hooks/useFavorites.ts';
import s from './FilmDetails.module.css';

export const FilmDetails = () => {
  const params = useParams();
  const { data, isLoading, error } = useGetFilmDetailsQuery(params.id!);
  const { isAuth } = useAuth();

  const { isFavorite, handleFavoritesClick } = useFavorites(data);

  if (isLoading) {
    return (
      <p>
        <LoadingScreen />
      </p>
    );
  }

  if (error) {
    return <p>Error</p>;
  }
  if (data) {
    return (
      <div className={s.wrapper}>
        <img src={data.posterUrl} alt="film poster" />
        <div className={s.container}>
          <h2>{data.nameRu}</h2>
          <h3>{data.year}</h3>
          <span>{data.description}</span>
          <span>{data.nameOriginal}</span>
          {isAuth && (
            <button className={s.card_button} onClick={handleFavoritesClick}>
              {isFavorite ? 'Удалить из избранного' : 'Добавить в избранное'}
            </button>
          )}
        </div>
      </div>
    );
  }
};

FilmDetails.propTypes = {
  id: PropTypes.number.isRequired,
};
