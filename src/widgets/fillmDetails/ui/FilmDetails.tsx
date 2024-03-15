import { useParams } from 'react-router-dom';
import { useGetFilmDetailsQuery } from 'src/features/redux/filmsApi/filmsSlice.ts';
import { useFavorites } from 'src/shared/hooks/useFavorites.ts';
import s from './FilmDetails.module.css';
import { LoadingScreen } from 'src/shared/ui/loader';

export const FilmDetails = () => {
  const params = useParams();
  const { data, isLoading, error } = useGetFilmDetailsQuery(params.id || '');

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
          <button
            className={s.card_button}
            onClick={() => handleFavoritesClick()}
          >
            {isFavorite ? 'Удалить из избранного' : 'Добавить в избранное'}
          </button>
        </div>
      </div>
    );
  }
};
