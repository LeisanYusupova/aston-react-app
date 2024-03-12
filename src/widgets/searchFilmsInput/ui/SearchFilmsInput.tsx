import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSearchFilmsQuery } from 'src/features/searchFilmsApi/searchSlice.ts';
import { SearchFilmInterface } from 'src/shared/types/types.tsx';
import s from './SearchFilmsInput.module.css';

export const SearchFilmsInput = () => {
  const [foundFilms, setFilms] = useState<SearchFilmInterface[]>([]);
  const [keyword, setKeyword] = useState('');
  const { data } = useSearchFilmsQuery(keyword);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setKeyword(value);
  };

  useEffect(() => {
    if (data) {
      setFilms(data.films);
    }
  }, [data]);
  const navigate = useNavigate();
  const handleItemClick = (id: number) => {
    setKeyword('');
    setFilms([]);
    navigate(`/${id}`);
  };

  const handleSearchClick = (search: string) => {
    setFilms([]);
    navigate(`/search?search=${search}`);
    setKeyword('');
  };

  return (
    <div>
      <input
        value={keyword}
        className={s.search_input}
        placeholder={'Поиск'}
        onChange={(event) => {
          handleInputChange(event);
        }}
      ></input>
      {foundFilms.length > 0 && (
        <div className={s.search_wrapper}>
          {foundFilms.map((item) => (
            <div className={s.search_item} key={item.filmId}>
              <a onClick={() => handleItemClick(item.filmId)}>{item.nameRu}</a>
            </div>
          ))}
        </div>
      )}
      <button onClick={() => handleSearchClick(keyword)}>Найти</button>
    </div>
  );
};
