import { useSearchParams } from 'react-router-dom';
import { useSearchFilmsQuery } from 'src/features/redux/searchFilmsApi/searchSlice.ts';
import ErrorBoundary from 'src/features/errorBoundary/ErrorBoundary.tsx';
import { SearchFilmInterface } from 'src/shared/types/types.tsx';
import { FilmCard } from 'src/entities/film';
import { LoadingScreen } from 'src/shared/ui/loader';
import s from './SearchPage.module.css';

export const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get('search');
  const { data, isLoading, error } = useSearchFilmsQuery(keyword!);

  if (isLoading) {
    return (
      <div>
        <LoadingScreen />
      </div>
    );
  }
  if (error) {
    return <div>error</div>;
  }
  if (data) {
    return (
      <ErrorBoundary>
        <div className={s.list_wrapper}>
          {data.map((item: SearchFilmInterface) => (
            <FilmCard
              key={item.filmId}
              id={item.filmId}
              name={item.nameRu}
              country={item.countries[0]?.country}
              year={item.year}
              image={item.posterUrlPreview}
            />
          ))}
        </div>
      </ErrorBoundary>
    );
  }
};
