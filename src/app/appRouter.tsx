import { createBrowserRouter } from 'react-router-dom';
import { AppRoute } from 'src/shared/types/types.tsx';
import { LoginPage } from 'src/pages/loginPage';
import { FavoritesPage } from 'src/pages/favoritesPage';
import { RegisterPage } from 'src/pages/registerPage';
import { FilmPage } from 'src/pages/filmPage';
import { FilmsPage } from 'src/pages/filmsPage/ui';
import { MainLayout } from 'src/shared/ui/templates/MainLayout.tsx';
import { SearchPage } from 'src/pages/searchPage';
import { HistoryPage } from 'src/pages/historyPage/ui/HistoryPage.tsx';

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
          path: AppRoute.Search,
          element: <SearchPage />,
        },
        {
          path: AppRoute.History,
          element: <HistoryPage />,
        },
        {
          path: AppRoute.Signin,
          element: <LoginPage />,
        },
        {
          path: AppRoute.Favorites,
          element: <FavoritesPage />,
        },
        {
          path: AppRoute.Signup,
          element: <RegisterPage />,
        },
        {
          children: [
            {
              path: AppRoute.Id,
              element: <FilmPage />,
            },
          ],
        },
      ],
    },
  ]);
};
