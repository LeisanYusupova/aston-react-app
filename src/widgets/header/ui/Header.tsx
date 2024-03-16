import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAuth } from 'src/shared/hooks/useAuth';
import {
  removeUser,
  setUser,
} from 'src/features/redux/userProcess/userProcessSlice';
import { useTheme } from 'src/app/context/ThemeContext';
import { SearchFilmsInput } from 'src/widgets/searchFilmsInput/ui/SearchFilmsInput';
import { useDispatch } from 'react-redux';
import logo from 'src/assets/icon-film.png';
import sunIcon from 'src/assets/icons_sun.png';
import moonIcon from 'src/assets/icons_moon.png';
import { getCurrentUser, setCurrentUser } from 'src/shared/utils/user.ts';
import s from './Header.module.css';

export const Header = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const { isDark, toggleTheme } = useTheme();
  const { isAuth, email } = useAuth();
  if (!email) {
    const user = getCurrentUser();
    if (user) {
      dispatch(setUser({ email: user }));
    }
  }

  const handleLogOut = () => {
    setCurrentUser('');
    dispatch(removeUser());
  };
  const handleHistoryClick = () => {
    navigate('/history');
  };

  return (
    <div className={`${s.header_wrapper} ${isDark ? s['dark'] : s['light']}`}>
      <div className={s.left_wrapper}>
        <Link className={s.logo_wrapper} to="/">
          <img src={logo} width={60} height={60} alt="Логотип" />
        </Link>
        {isDark ? (
          <img
            className={s.theme_toggle_wrapper}
            onClick={toggleTheme}
            src={moonIcon}
            width={50}
            height={50}
            alt="Moon Icon"
          />
        ) : (
          <img
            onClick={toggleTheme}
            src={sunIcon}
            width={50}
            height={50}
            alt="Sun icon"
          />
        )}
      </div>
      {isAuth && (
        <div className={s.user_wrapper}>
          <Link to="/favorites">
            <button>Избранное</button>
          </Link>
          <SearchFilmsInput />
          <button onClick={handleHistoryClick}>История поиска</button>
        </div>
      )}
      <div className={s.button_wrapper}>
        {isAuth ? (
          <div>
            <span>{email}</span>
            <button onClick={handleLogOut}>Выйти</button>
          </div>
        ) : (
          <div className={s.button_wrapper}>
            <Link to="/signin">
              <button>Войти</button>
            </Link>
            <Link to="/signup">
              <button>Регистрация</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
