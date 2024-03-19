import { useParams } from 'react-router-dom';
import { useGetFilmDetailsQuery } from 'src/features/redux/filmsApi/filmsSlice.ts';
import { LoadingScreen } from 'src/shared/ui/loader';
import { useAuth } from 'src/shared/hooks/useAuth.ts';
import { useFavorites } from 'src/shared/hooks/useFavorites.ts';
import s from './FilmDetails.module.css';

export const FilmDetails = () => {
  const params = useParams();
  const { isAuth, email } = useAuth();
  const { data, isLoading, error } = useGetFilmDetailsQuery(params.id!);

  const { isFavorite, handleFavoritesClick } = useFavorites(data, email);

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
        <img
          className={s.image}
          src={data.image}
          width={300}
          height={500}
          alt="film poster"
        />
        <div className={s.container}>
          <h2>{data.name}</h2>
          <h3>{data.year}</h3>
          <span className={s.description}>{data.description}</span>
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
