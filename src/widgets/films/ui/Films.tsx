import { FilmCard } from 'src/entities/film';
import { FilmInterface } from 'src/shared/types/types.tsx';
import { useGetFilmsQuery } from 'src/features/redux/filmsApi/filmsSlice.ts';
import { LoadingScreen } from 'src/shared/ui/loader';
import s from './Films.module.css';

export const Films = () => {
  const { data, isLoading, error } = useGetFilmsQuery('');
  if (isLoading) {
    return (
      <div>
        <LoadingScreen></LoadingScreen>
      </div>
    );
  }
  if (error) {
    return <div>error</div>;
  }

  if (data) {
    return (
      <div className={s.list_wrapper}>
        {data!.length > 0 &&
          data.map((item: FilmInterface) => (
            <FilmCard
              key={item.kinopoiskId}
              id={item.kinopoiskId}
              name={item.nameRu}
              country={item.countries![0].country}
              year={item.year}
              image={item.posterUrlPreview!}
            />
          ))}
      </div>
    );
  }
};
