import { createBrowserRouter } from 'react-router-dom';
import { AuthPage } from 'src/pages/authPage';
import { FavoritesPage } from 'src/pages/favoritesPage';
import { RegisterPage } from 'src/pages/registerPage';
import { FilmPage } from 'src/pages/filmPage';
import { FilmsPage } from '../pages/filmsPage/ui';
import { AppRoute } from '../shared/types/types.tsx';
import { MainLayout } from '../shared/ui/templates/MainLayout.tsx';

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
          path: AppRoute.Signin,
          element: <AuthPage />,
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
