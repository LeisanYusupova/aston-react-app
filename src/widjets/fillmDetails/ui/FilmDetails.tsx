import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FilmDetailInterface } from '../../../shared/types/types.tsx';
import s from './FilmDetails.module.css';

export const FilmDetails = () => {
  const [film, setFilm] = useState<FilmDetailInterface | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const params = useParams();
  useEffect(() => {
    fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${params.id}`, {
      method: 'GET',
      headers: {
        'X-API-KEY': '0e28ff12-d850-4ac5-b417-3d42b162dc04',
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        return res.json();
      })
      .then((json) => {
        setFilm(json);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className={s.wrapper}>
      <img src={film?.posterUrl} alt="film poster" />
      <div className={s.container}>
        <h2>{film?.nameRu}</h2>
        <h3>{film?.year}</h3>
        <span>{film?.description}</span>
        <span>{film?.nameOriginal}</span>
      </div>
    </div>
  );
};
