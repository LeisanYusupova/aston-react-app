import { Link } from 'react-router-dom';
import { useTheme } from 'src/app/context/ThemeContext.tsx';
import logo from '../../../assets/icon-film.png';
import s from './Header.module.css';

export const Header = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className={`${s.header_wrapper} ${isDark ? s['dark'] : s['light']}`}>
      <Link to="/">
        <img src={logo} width={60} height={60} alt="Логотип" />
      </Link>
      <button onClick={toggleTheme}>change theme</button>
      <Link to="/favorites">
        <button>Избранное</button>
      </Link>

      <div className={s.button_wrapper}>
        <Link to="/signin">
          <button>Войти</button>
        </Link>
        <Link to="/signup">
          <button>Регистрация</button>
        </Link>
      </div>
    </div>
  );
};
