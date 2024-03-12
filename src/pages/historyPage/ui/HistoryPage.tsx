import { useSelector } from 'react-redux';
import { RootState } from 'src/app/store/store.tsx';

export const HistoryPage = () => {
  const { keywords } = useSelector((state: RootState) => state.searchFilms);
  return (
    <div>
      {keywords.map((item, index) => (
        <a key={index} href="#">
          {item}
        </a>
      ))}
    </div>
  );
};
