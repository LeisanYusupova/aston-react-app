import { useSelector } from 'react-redux';
import { getSearchSelector } from 'src/features/redux/searchFilms/selectors.ts';
import { useDispatch } from 'react-redux';
import { setCurrentSearch } from 'src/features/redux/searchFilms/searchFilmsSlice.ts';
import s from './HistoryPage.module.css';

export const HistoryPage = () => {
  const dispatch = useDispatch();
  const handleLinkClick = (item: string) => {
    dispatch(setCurrentSearch(item));
  };
  const { keywords } = useSelector(getSearchSelector);
  return (
    <div className={s.wrapper}>
      <h2 className={s.heading}>История поиска</h2>
      <div className={s.link_wrapper}>
        {keywords.length > 0 ? (
          keywords.map((item, index) => (
            <a
              key={index}
              href={`/search?search=${item}`}
              onClick={() => handleLinkClick(item)}
            >
              {item}
            </a>
          ))
        ) : (
          <span className={s.info_message}>
            Здесь будет отображаться история поиска
          </span>
        )}
      </div>
    </div>
  );
};
