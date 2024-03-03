import { useState, useEffect } from 'react';
import { FilmCard } from 'src/entities/film';
import { FilmInterface } from 'src/shared/types/types.tsx';
import { API_KEY } from 'src/api/API.tsx';
import s from './Films.module.css';

export const Films = () => {
  const [films, setFilms] = useState<FilmInterface[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  useEffect(() => {
    fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films', {
      method: 'GET',
      headers: {
        'X-API-KEY': API_KEY,
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
        setFilms(json.items.slice(2, 12));
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
    <div className={s.list_wrapper}>
      {films.map((item) => (
        <FilmCard
          key={item.kinopoiskId}
          id={item.kinopoiskId}
          name={item.nameRu}
          country={item.countries[0].country}
          year={item.year}
          image={item.posterUrlPreview}
        />
      ))}
    </div>
  );
};
