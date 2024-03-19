import { useSelector } from 'react-redux';
import { RootState } from 'src/app/store/store';
import s from './HistoryPage.module.css';

export const HistoryPage = () => {
  const { keywords } = useSelector((state: RootState) => state.searchFilms);
  return (
    <div className={s.link_wrapper}>
      {keywords.length > 0 ? (
        keywords.map((item, index) => (
          <a key={index} href={`/search?search=${item}`}>
            {item}
          </a>
        ))
      ) : (
        <span>Здесь будет отображаться история поиска</span>
      )}
    </div>
  );
};
