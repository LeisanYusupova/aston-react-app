import { Outlet } from 'react-router-dom';
import { Header } from 'src/widgets/header';
import { useTheme } from 'src/app/context/ThemeContext.tsx';
import s from './MainLayout.module.css';

export const MainLayout = () => {
  const { isDark } = useTheme();
  return (
    <div className={`${s.main_wrapper} ${isDark ? s['dark'] : s['light']}`}>
      <Header />
      <div>
        <Outlet />
      </div>
    </div>
  );
};
