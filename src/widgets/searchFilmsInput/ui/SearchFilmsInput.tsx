import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from 'src/shared/hooks/useAuth.ts';
import { useSearchFilmsQuery } from 'src/features/redux/searchFilmsApi/searchSlice.ts';
import { useDispatch, useSelector } from 'react-redux';
import { useDebounce } from 'src/shared/hooks/useDebounce.ts';
import { getSearchSelector } from 'src/features/redux/searchFilms/selectors.ts';
import {
  setCurrentSearch,
  setSearch,
} from 'src/features/redux/searchFilms/searchFilmsSlice.ts';
import { Suggestions } from 'src/widgets/suggestions/ui/Suggestions.tsx';
import s from './SearchFilmsInput.module.css';

export const SearchFilmsInput = () => {
  const dispatch = useDispatch();
  const { currentSearch } = useSelector(getSearchSelector);
  const [isOpenSuggestions, setIsOpenSuggestions] = useState(false);

  const searchText = useDebounce(currentSearch, 200);
  const { data: foundFilms } = useSearchFilmsQuery(searchText);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch(setCurrentSearch(value));
  };

  const navigate = useNavigate();
  const handleItemClick = (id: number) => {
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
      handleSearchClick(currentSearch);
    }
  };

  return (
    <div className={s.search_wrapper}>
      <input
        value={currentSearch}
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
        onClick={() => handleSearchClick(currentSearch)}
      >
        Найти
      </button>
      {currentSearch && foundFilms && isOpenSuggestions && (
        <Suggestions
          suggestions={foundFilms}
          onSuggestionClick={handleItemClick}
        />
      )}
    </div>
  );
};
