import { SearchFilmInterface } from 'src/shared/types/types.tsx';
import s from './Suggestions.module.css';

interface Props {
  suggestions: SearchFilmInterface[];
  onSuggestionClick: (suggestion: number) => void;
}
export const Suggestions = ({ suggestions, onSuggestionClick }: Props) => {
  return (
    <div className={s.search_wrapper}>
      {suggestions.length
        ? suggestions.map((item) => (
            <div className={s.search_item} key={item.filmId}>
              <a onClick={() => onSuggestionClick(item.filmId)}>
                {item.nameRu}
              </a>
            </div>
          ))
        : 'По вашему запросу ничего не найдено'}
    </div>
  );
};
