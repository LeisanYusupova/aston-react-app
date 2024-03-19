import { API_KEY } from 'src/api/API.tsx';

export const fetchFilmData = async (filmId: number) => {
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
};
