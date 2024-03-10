import { useParams } from 'react-router-dom';
import { useGetFilmDetailsQuery } from 'src/features/films/filmsSlice.ts';
import s from './FilmDetails.module.css';

export const FilmDetails = () => {
  const params = useParams();
  const { data, isLoading, error } = useGetFilmDetailsQuery(params.id || '');

  if (isLoading) {
    return <p>Loading...</p>;
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
        </div>
      </div>
    );
  }
};
