# Code conventions

Стек и слои: [architecture.md](../specs/architecture.md), решения: [decisions.md](../decisions.md).

## HTML

- Исходный `<body>` в `index.html` содержит только `<script type="module" src="js/main.js">`.
- Элементы приложения — через `document.createElement` или `el()` из `js/dom.js`.
- Текст — только `textContent`. Картинки — `img` с осмысленным `alt`.
- Кнопка без видимого текста имеет `aria-label`.
- Семантика собранного дерева: `header`, `main`, кнопки — `button`, таблица лидеров — `table`.

## CSS

- BEM-классы; цвета и отступы через CSS custom properties.
- Стили в `css/`, подключение из `<head>`. Без Bootstrap и прочих CSS-фреймворков.
- Лицо и рубашка карточки переключаются классом, не сменой разметки строкой HTML.

## JavaScript

- Чистый JS, ES modules.
- `js/game.js` знает правила и состояние. Модалки и `localStorage` он не открывает: это `js/main.js`, `js/modal.js`, `js/leaderboard.js`.
- Без TypeScript, jQuery и UI-библиотек.
- Без `alert` / `prompt` / `confirm`.

## Запрещено (штраф курса −100)

- Разметка не через `document.createElement`, или в исходном `<body>` есть что-то кроме `script`.
- Присваивание `innerHTML` / `outerHTML`, `insertAdjacentHTML`, `document.write`, `document.writeln`, `DOMParser`, `Range.createContextualFragment`. Интерфейс собирается без чтения и без записи `innerHTML`.
- `alert`, `confirm`, `prompt`.
- Сторонние библиотеки для интерфейса, DOM или игровой логики.
