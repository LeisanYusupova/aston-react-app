import { Outlet } from 'react-router-dom';
import { Header } from 'src/widgets/header';
import s from './MainLayout.module.css';

export const MainLayout = () => {
  return (
    <div className={s.main_wrapper}>
      <Header />
      <div>
        <Outlet />
      </div>
    </div>
  );
};
