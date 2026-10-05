# Architecture

Связано с [decisions.md](../decisions.md). Меняешь границы слоёв — обнови эту спеку и decision.

## Стек

- HTML + CSS + vanilla JavaScript (ES modules)
- Деплой: GitHub Pages ([D-006](../decisions.md))
- Сборщик не требуется, пока страница открывается как статические файлы

## Слои

```text
index.html
css/
  base.css            → токены, базовая типографика
  components.css      → header, board, card, modal
js/
  dom.js              → el(tag, { className, text, attrs, children })
  cards.js            → описание 8 пар: id и src
  shuffle.js          → fisherYates(list) → новый массив
  game.js             → состояние и команды правил
  board.js            → рисует карточки из состояния, отдаёт клики
  header.js           → две кнопки и счётчики
  modal.js            → одна оболочка на оба окна
  leaderboard.js      → чтение/запись localStorage и разметка таблицы
  main.js             → создать UI, подписаться на события, startGame()
assets/images/        → 8 лиц + рубашка
```

`index.html`: в `<head>` — charset, viewport, title, ссылки на CSS. В `<body>` — только `<script type="module" src="js/main.js"></script>`.

## Правила модулей

- `el()` внутри вызывает `document.createElement`, вешает класс, `textContent`, атрибуты и детей через `append`. HTML-строк не принимает.
- `game.js` не импортирует DOM, модалку и `localStorage`. Он хранит состояние и отвечает на команды: `startGame`, `flipCard(id)`, `cancelMismatch`.
- Наружу игра сообщает о смене состояния. `main.js` по этому сигналу обновляет поле, счётчики и при победе один раз сохраняет результат и открывает модалку.
- `modal.js` не знает, победа это или рейтинг. Ему передают готовое содержимое и кнопки.
- Одинаковые действия «Новая игра» в хедере и в модалке победы вызывают одну функцию.

## Поток

```text
load → startGame → shuffle → render face down
click card → game.flipCard
  match → counters, maybe win → leaderboard.save once → modal.open(win)
  mismatch → lock → timeout 1000ms → face down → unlock
header New game / win New game → clearTimeout → startGame → modal.close
header Leaderboard → modal.open(table)  // поле не трогать
```

## Контракт `feat/app-shell`

Шаг только собирает пустой экран:

- `el()` и модули-заготовки без правил переворота.
- Хедер с двумя кнопками ([header.md](./header.md)). Кнопки пока могут не иметь поведения, кроме того что они есть в DOM и доступны.
- Счётчики показывают «0 ходов» и «0 из 8» ([counters.md](./counters.md)).
- Контейнер поля без карточек.
- «Просмотр кода страницы» показывает пустой `body` и один `script`.

## Контракт `feat/board`

Шаг заполняет поле и не включает правила переворота:

- После загрузки в `.board` 16 кнопок `.card`. Ни у одной нет класса `card--flipped`.
- Восемь `pairId`, каждый дважды. Лицо — `img` из `assets/images/`. Рубашка одна и та же.
- Счётчики остаются «0 ходов» и «0 из 8». Кнопки хедера не `disabled`.
- Порядок колоды фиксированный. Перемешивание — `feat/shuffle`.
- Клик по карточке не меняет класс и не меняет счётчики.
