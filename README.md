# Дипломный проект курса «React»

Дипломный проект представляет собой интернет-магазин обуви. Задача заключается в создании работающего приложения, всеми основными функциями которого можно пользоваться.

Как это всегда бывает, вы, фронтенд-разработчик, — последний в цепочке создания продукта, поэтому вам необходимо пользоваться результатами работы верстальщика и бекэнд-разработчика. И если результаты работы верстальщика вы ещё можете немного подправить, то бэкенд вы уже не имеете права редактировать.

Большая часть разметки и стилей уже реализована за вас и хранится в каталоге html. Как всегда, пояснений особо к разметке нет, так как, со слов верстальщика, «там и так всё понятно».

Перейдём к самому приложению.

## Обязательные условия

Все функции должны быть реализованы.

Внешний вид должен быть аналогичен тому, что представлен в разметке в каталоге `html.`

Бэкенд видоизменять нельзя. Всё, что можно там сделать, — это раскомментировать строки для генерации задержки и ошибки:

```
const fortune = (ctx, body = null, status = 200) => {
    // Uncomment for delay
    // const delay = randomNumber(1, 10) * 1000;
    const delay = 0;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Uncomment for error generation
            // if (Math.random() > 0.8) {
            //     reject(new Error('Something bad happened'));
            //     return;
            // }

            ctx.response.status = status;
            ctx.response.body = body;
            resolve();
        }, delay);
    })
}
```

Они специально закомментированы, чтобы вам не приходилось ждать по 0–10 секунд на каждый запрос и не мучиться с ошибками.

Запускать сервер нужно командой npm run watch, не забудьте сначала сделать npm install, тогда он запустится в режиме live-reload.

Для хранения состояния корзины и побочных эффектов могут использоваться:

1. Context API + побочные эффекты в компонентах;
2. Redux + побочные эффекты в компонентах, либо Action Creator;
3. Redux + Redux Thunk;
4. Redux + Redux Observable;
5. Redux + Redux-saga.

Выбирайте любой удобный вам способ. Итоговая оценка не зависит от того, какой из пяти способов вы выберите.

Весь код должен быть выложен на GitHub в виде отдельного репозитория.

При оформлении кода рекомендуем вам опираться на стиль кодирования Airbnb:

[https://github.com/airbnb/javascript](https://github.com/airbnb/javascript) (именно JS, а не React).

Можете ознакомиться с [методическими рекомендациями по оценке диплома](https://github.com/netology-code/ra16-diploma/blob/master/guidelines.md), в соответствии с которыми дипломные руководители будут оценивать вашу работу.

Важно: не забывайте показывать loader при загрузке и сообщение об ошибке, если с сервера вы её получили или вообще ничего не получили, например, у пользователя сейчас нет интернет-соединения.

## Вехи

На весь диплом даётся три недели, в соответствии с чем мы выделили ключевые вехи, которые отражают, какая часть и до какого срока должна быть сдана. Вы можете делать и быстрее, но не медленнее.

1. Первая неделя:
    * постраничный роутинг;
    * шапка и футер;
    * статичные страницы: 404, о магазине, контакты;
    * баннер.
2. Вторая неделя:
    * работа с HTTP без отображения loader или обработки ошибок;
    * компонент «Хиты продаж»;
    * каталог: компонент на главной странице и на странице каталога;
    * поиск;
    * для тех, кто работает с Redux, подключение Redux.
3. Третья неделя:
    * глобальное состояние, как минимум для корзины;
    * корзина и оформление заказа;
    * loader и обработка ошибок.

Не забывайте выделить время на исправление замечаний от дипломных руководителей.

## Содержание

Приложение содержит следующие самостоятельные экраны (страницы):

 1. Главная страница.
 2. Каталог товаров.
 3. Информационная страница.
 4. Страница товара.
 5. Корзина.
 6. 404

## Переходы между экранами

Навигационным центром приложения являются шапка и футер каждого экрана (страницы):

![first](https://github.com/Zrazhevskii/ra16-diploma_frontend/blob/main/public/header-menu.png)
![second](https://github.com/Zrazhevskii/ra16-diploma_frontend/blob/main/public/footer-menu.png)

Из шапки можно попасть на следующие экраны:

 - логотип и ссылка «Главная» — ведут на главную страницу, URL — "/";
 - каталог — ведёт на страницу каталога, URL — "/catalog.html";
 - о магазине — ведёт на страницу «О магазине», URL — "/about.html";
 - контакты — ведёт на страницу «Контакты», URL — "/contacts.html".

Из футера можно попасть на следующие экраны:

 - о магазине — ведёт на страницу «О магазине», URL — "/about.html";
 - каталог — ведёт на страницу каталога, URL — "/catalog.html";
 - контакты — ведёт на страницу «Контакты», URL — "/contacts.html".

## Описание экранов

### Главная страница

Экран «Главная страница» доступен по умолчанию при открытии приложения.

![main page1](https://github.com/Zrazhevskii/ra16-diploma_frontend/blob/main/public/index-loading.png)

При загрузке любых данных с помощью сетевых запросов должен отображаться лоадер. У каждого виджета лоадер свой, то есть у вас не должно быть одного лоадера на всё приложение.

После загрузки страница выглядит следующим образом:

![main-page2](https://github.com/Zrazhevskii/ra16-diploma_frontend/blob/main/public/index-loaded.png)

Общая схема:

![main-page-comments](https://github.com/Zrazhevskii/ra16-diploma_frontend/blob/main/public/index-loaded-comments.png)

Вам нужно реализовать:

  1. Хиты продаж — GET [http://localhost:7070/api/top-sales](http://localhost:7070/api/top-sales). В ответ приходит JSON, содержащий данные. Вам необходимо его распарсить и вывести элементы. Если в ответе пришёл пустой массив, то есть хитов продаж нет, то компонент не должен ничего отображать, как и не должен занимать места на экране.

  2. Категории каталога — GET [http://localhost:7070/api/top-sales](http://localhost:7070/api/categories). В ответ приходит массив категорий без элемента «Все», его вы должны добавить сами. По умолчанию выбранный элемент служит для определения того, какие будут загружаться товары из каталога. Если «Все» — загружаются все, если «Женская обувь» — загружается только женская обувь. Активный элемент выделен. При смене категории делается новый запрос, предыдущие загруженные данные удаляются.

  3. Элементы каталога — GET [http://localhost:7070/api/items](http://localhost:7070/api/items) для варианта «Все». При другой выбранной категории вы делаете запрос вида GET [http://localhost:7070/api/items](http://localhost:7070/api/items?categoryId=X). Возвращается массив элементов, соответствующих вашему запросу.

  4. Загрузить ещё — при запросе элементов каталога загружаются следующие 6. При нажатии на «Загрузить ещё» загружаются ещё 6: GET [http://localhost:7070/api/items](http://localhost:7070/api/items?offset=6), где offset определяет, сколько элементов пропустить. Если сервер вернул пустой массив или меньше 6 элементов, то кнопка «Загрузить ещё» должна исчезнуть. На время загрузки над кнопкой также показывается лоадер, сама кнопка отключается.

Обратите внимание, при загрузке по кнопке «Ещё» должна учитываться выбранная категория: то есть если выбрана категория «Женская обувь», то при нажатии на «Ещё» делается запрос GET [http://localhost:7070/api/items](http://localhost:7070/api/items?categoryId=X&offset=6) и т. д.

Рекламный баннер и текст на нём являются статичными.

Каталог товаров
Экран «Каталог товаров» должен выглядеть следующим образом:

