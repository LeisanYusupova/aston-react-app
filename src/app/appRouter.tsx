import { createBrowserRouter } from 'react-router-dom';
import { AppRoute } from 'src/shared/types/types.tsx';
import { lazy, Suspense } from 'react';
import { FilmsPage } from 'src/pages/filmsPage/ui';
import { MainLayout } from 'src/shared/ui/templates/MainLayout.tsx';
import { HistoryPage } from 'src/pages/historyPage/ui/HistoryPage.tsx';
import { SearchPage } from 'src/pages/searchPage';
import { LoadingScreen } from 'src/shared/ui/loader';

export const LoginPage = lazy(() => import('../pages/loginPage/ui/LoginPage'));
export const FavoritesPage = lazy(
  () => import('src/pages/favoritesPage/ui/FavoritesPage'),
);
export const RegisterPage = lazy(
  () => import('src/pages/registerPage/ui/RegisterPage'),
);
export const FilmPage = lazy(() => import('src/pages/filmPage/ui/FilmPage'));

export const createRouter = () => {
  return createBrowserRouter([
    {
      path: AppRoute.Root,
      element: <MainLayout />,
      children: [
        {
          path: AppRoute.Root,
          element: <FilmsPage />,
        },
        {
          path: AppRoute.History,
          element: <HistoryPage />,
        },
        {
          path: AppRoute.Signin,
          element: (
            <Suspense fallback={<LoadingScreen />}>
              <LoginPage />
            </Suspense>
          ),
        },
        {
          path: AppRoute.Favorites,
          element: (
            <Suspense fallback={<LoadingScreen />}>
              <FavoritesPage />
            </Suspense>
          ),
        },
        {
          path: AppRoute.Signup,
          element: (
            <Suspense fallback={<LoadingScreen />}>
              <RegisterPage />
            </Suspense>
          ),
        },
        {
          path: AppRoute.Search,
          element: <SearchPage />,
        },
        {
          children: [
            {
              path: AppRoute.Id,
              element: (
                <Suspense fallback={<LoadingScreen />}>
                  <FilmPage />
                </Suspense>
              ),
            },
          ],
        },
      ],
    },
  ]);
};
