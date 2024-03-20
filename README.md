
> - Предметная область: Приложение поиска фильмов
> - Используемое API: [KinopoiskAPI](https://kinopoiskapiunofficial.tech/documentation/api/)
> - [Посмотреть проект](https://aston-react-app.vercel.app/)
>
## Основной функционал
>
> - Регистрация и авторизация пользователя.
> - Избранные фильмы. У зарегистрированного пользователя есть возможность добавлять и удалять фильмы из избранного.
> - Поиск по названию фильма.
> - История поиска фильмов.


>
> ## Реализация требований
>
- [x] Реализованы требования функционала.
- [x] Для хранения данных используется LocalStorage [favoritesMiddleware](https://github.com/LeisanYusupova/aston-react-app/blob/master/src/shared/middlewares/favoritesMiddleware.ts) [searchMiddleware](https://github.com/LeisanYusupova/aston-react-app/blob/master/src/shared/middlewares/searchMiddleware.ts)
>
> ### React
>
- [x] Пишем функциональные компоненты с хуками: [widgets](https://github.com/LeisanYusupova/aston-react-app/tree/master/src/widgets),[features](https://github.com/LeisanYusupova/aston-react-app/tree/master/src/features),[entities](https://github.com/LeisanYusupova/aston-react-app/tree/master/src/entities)
- [x] Есть разделение на умные и глупые компоненты.
- [x] Есть рендеринг [списков](https://github.com/LeisanYusupova/aston-react-app/blob/master/src/widgets/films/ui/Films.tsx)
- [x] Реализована [форма](https://github.com/LeisanYusupova/aston-react-app/blob/master/src/widgets/form/ui/Form.tsx)
- [x] Есть применение [ConextAPI](https://github.com/LeisanYusupova/aston-react-app/blob/master/src/app/context/ThemeContext.tsx)
- [x] Есть применение [предохранителя](https://github.com/LeisanYusupova/aston-react-app/blob/master/src/features/errorBoundary/ErrorBoundary.tsx)
- [x] Кастомные [хуки](https://github.com/LeisanYusupova/aston-react-app/tree/master/src/shared/hooks)
- [x] Использование [PropTypes](https://github.com/LeisanYusupova/aston-react-app/blob/master/src/entities/film/ui/FilmCard.tsx)
- [x] Поиск не должен триггерить много запросов [debounce](https://github.com/LeisanYusupova/aston-react-app/blob/master/src/shared/hooks/useDebounce.ts)
- [x] Есть применение [Lazy+Suspense](https://github.com/LeisanYusupova/aston-react-app/blob/master/src/app/appRouter.tsx)
>
> ### Redux
>
- [x] Используем [Modern Redux with Redux Toolkit](https://github.com/LeisanYusupova/aston-react-app/tree/master/src/features/redux)
- [x] Используем [слайсы](https://github.com/LeisanYusupova/aston-react-app/blob/master/src/features/redux/favoriteFilms/favoriteFilmsSlice.ts)
- [x] Кастомная [middleware](https://github.com/LeisanYusupova/aston-react-app/blob/master/src/shared/middlewares/favoritesMiddleware.ts)
- [x] Используем [RTK Query](https://github.com/LeisanYusupova/aston-react-app/blob/master/src/features/redux/filmsApi/filmsSlice.ts)
- [x] Используем [Transforming Responses](https://github.com/LeisanYusupova/aston-react-app/blob/master/src/features/redux/filmsApi/filmsSlice.ts)
>
> ## 2 уровень
>
- [x] Использование [TypeScript](https://github.com/LeisanYusupova/aston-react-app/blob/master/tsconfig.json)
- [x] Использование [Firebase](https://github.com/LeisanYusupova/aston-react-app/blob/master/src/features/firebase/firebase.ts)
- [x] Использование [createSelector](https://github.com/LeisanYusupova/aston-react-app/blob/master/src/features/redux/favoriteFilms/selectors.ts)
- [x] Настроен CI/CD 
> ## Дополнительная информация
 >- Валидация форм регистрации и авторизации с помощью Yup
 >- Использован Feature-Sliced Design подход
>
>
