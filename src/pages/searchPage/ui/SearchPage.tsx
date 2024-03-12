import { useSearchParams } from 'react-router-dom';
import { useSearchFilmsQuery } from 'src/features/searchFilmsApi/searchSlice.ts';
import { SearchFilmInterface } from 'src/shared/types/types.tsx';
import { FilmCard } from 'src/entities/film';
import s from './SearchPage.module.css';

export const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get('search');
  const { data, isLoading, error } = useSearchFilmsQuery(keyword!);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>error</div>;
  }
  if (data) {
    return (
      <div className={s.list_wrapper}>
        {data.films!.length > 0 &&
          data.films.map((item: SearchFilmInterface) => (
            <FilmCard
              key={item.filmId}
              id={item.filmId}
              name={item.nameRu}
              country={item.countries[0].country}
              year={item.year}
              image={item.posterUrlPreview}
            />
          ))}
      </div>
    );
  }
};
