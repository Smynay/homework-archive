# Description

Second step of Andersen education program.

Задание №2! Deadline - 13.05.2021
Использовать React+Redux+Typescript+Redux Saga+Jest+Enzyme

Дана API - https://www.omdbapi.com/

Должен быть реализован поиск фильмов и вывод их в виде карточек с краткой информацией.

Поиск при нажатии на кнопку. Также должна быть реализована сортировка.

Когда заходим на страницу, то список пуск и для этого отдельный компонент выводится.

При нажатии на карточку фильма пользователь должен переходить на другую страницу
с подробной информацией об этом фильме.

Также сделать страницу "О команде". Там что-нибудь о себе написать.

Выполнить панель навигации, чтобы можно было переходить между главной страницей и страницей о команде.

Подключить линтер(ESLint). Если он в template create-react-app с тайпскриптом не подключается автоматически. И написать .eslintrc с правилами для линтера.

Написать unit tests. Использовать jest для тестирования функций. Потренироваться на разных. И на хелперах и на редьюсерах и даже на сагах.
Использовать Enzyme для snapshot тестирования компонента.

Основная часть:
Выполнена главная страница с полным функционалом: 40 баллов
Выполнен переход и сама карточка отдельного фильма: 20 баллов
Выполнена страница о себе и панель навигации: 20 баллов

Продвинутая часть:
Типизированы все обычные функции и компоненты: 20 баллов
Типизирован редакс(в том числе саги) и запросы: 15 баллов
Реализован Хэндлинг в стор ошибок запроса: 5 баллов 
Подключен и настроен линтер с ts конфигом: 5 баллов
Написаны unit тесты КОТОРЫЕ ДЕЙСТВИТЕЛЬНО ТЕСТИРУЮТ на обычный функционал(10 штук минимум): 5 баллов
Написаны тесты КОТОРЫЕ ДЕЙСТВИТЕЛЬНО ТЕСТИРУЮТ на redux-saga(минимум по 2 на каждую): 10 баллов
Написаны snapshot тесты с помощью Enzyme(минимум на 5 компонентов): 5 баллов


Доп баллы: 
Количество ошибок линтера: от 0 до 10 баллов
CodeStyle: от 0 до 20 баллов

По codeStyle - принимаем все замечания, что были по первому заданию. + если сдадите заранее и исправите какие-то замечания по код стайлу, то больше будет баллов.

Действительно тестируют - значит проверяют работоспособность,а не написаны для количества.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.