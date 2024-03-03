import { Link } from 'react-router-dom';
import logo from '../../../assets/icon-film.png';
import s from './Header.module.css';

export const Header = () => {
  return (
    <div className={s.header_wrapper}>
      <Link to="/">
        <img src={logo} width={60} height={60} alt="Логотип" />
      </Link>
      <button>Войти</button>
    </div>
  );
};
