import { Outlet } from 'react-router-dom';
import { Header } from 'src/widgets/header';
import { useStoredState } from 'src/shared/hooks/useStoredState.ts';
import { useTheme } from 'src/app/context/ThemeContext.tsx';
import s from './MainLayout.module.css';

export const MainLayout = () => {
  const { isDark } = useTheme();
  useStoredState();
  return (
    <div className={`${s.main_wrapper} ${isDark ? s['dark'] : s['light']}`}>
      <Header />
      <div>
        <Outlet />
      </div>
    </div>
  );
};
