import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from 'src/shared/hooks/useAuth.ts';
import { useSearchFilmsQuery } from 'src/features/redux/searchFilmsApi/searchSlice.ts';
import { useDispatch } from 'react-redux';
import { useDebounce } from 'src/shared/hooks/useDebounce.ts';
import { setSearch } from 'src/features/redux/searchFilms/searchFilmsSlice.ts';
import { Suggestions } from 'src/widgets/suggestions/ui/Suggestions.tsx';
import s from './SearchFilmsInput.module.css';

export const SearchFilmsInput = () => {
  const dispatch = useDispatch();
  const [isOpenSuggestions, setIsOpenSuggestions] = useState(false);
  const [keyword, setKeyword] = useState('');

  const searchText = useDebounce(keyword, 200);
  const { data: foundFilms } = useSearchFilmsQuery(searchText);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setKeyword(value);
  };

  const navigate = useNavigate();
  const handleItemClick = (id: number) => {
    setKeyword('');
    navigate(`/${id}`);
  };

  const { email } = useAuth();

  const handleSearchClick = (search: string) => {
    dispatch(
      setSearch({
        keywords: search,
        user: email,
      }),
    );
    navigate(`/search?search=${search}`);
  };

  const onFocusHandler = () => setIsOpenSuggestions(true);

  const onBlurHandler = () =>
    setTimeout(() => setIsOpenSuggestions(false), 200);
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      setIsOpenSuggestions(false);
      handleSearchClick(keyword);
    }
  };

  return (
    <div className={s.search_wrapper}>
      <input
        value={keyword}
        className={s.search_input}
        placeholder={'Поиск'}
        onChange={(event) => {
          handleInputChange(event);
        }}
        onKeyDown={handleKeyPress}
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
      ></input>
      <button
        className={s.search_button}
        onClick={() => handleSearchClick(keyword)}
      >
        Найти
      </button>
      {keyword && foundFilms && isOpenSuggestions && (
        <Suggestions
          suggestions={foundFilms}
          onSuggestionClick={handleItemClick}
        />
      )}
    </div>
  );
};
