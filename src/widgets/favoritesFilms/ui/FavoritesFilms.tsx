import { FilmCard } from 'src/entities/film';
import { useEffect, useState } from 'react';
import { getFavoriteFilmsSelector } from 'src/features/redux/favoriteFilms/selectors.ts';
import { useAppSelector } from 'src/shared/hooks/hook.ts';
import { FilmDetailInterface } from 'src/shared/types/types.tsx';
import { API_KEY } from 'src/api/API.tsx';
import s from './FavoritesFilms.module.css';

export const FavoritesFilms = () => {
  const films = useAppSelector(getFavoriteFilmsSelector);
  const [filmData, setFilmData] = useState<FilmDetailInterface[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchPromises = films.map(async (filmId) => {
        const response = await fetch(
          `https://kinopoiskapiunofficial.tech/api/v2.2/films/${filmId}`,
          {
            headers: {
              'X-API-KEY': API_KEY,
              'Content-Type': 'application/json',
            },
          },
        );

        const data = await response.json();
        return data;
      });

      try {
        const filmData = await Promise.all(fetchPromises);
        setFilmData(filmData);
      } catch (error) {
        console.log('Ошибка при получении данных:', error);
      }
    };

    fetchData();
  }, [films]);

  if (filmData.length === 0) {
    return <div>Здесь будут отображаться ваши избранные фильмы</div>;
  }

  return (
    <div className={s.list_wrapper}>
      {filmData.map((film) => (
        <FilmCard
          key={film.kinopoiskId}
          id={film.kinopoiskId}
          name={film.nameRu}
          country={film.countries[0].country}
          year={film.year}
          image={film.posterUrlPreview}
        />
      ))}
    </div>
  );
};
