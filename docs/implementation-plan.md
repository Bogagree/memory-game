# Memory Game — план реализации (общий)

Шаги — в [plan.md](./plan.md). Требования и решения — в SDD-доках, здесь не дублируем.

## SDD (читать сначала)

| Артефакт | Путь |
| --- | --- |
| Как ведём проект | [docs/README.md](./README.md) |
| Закрытые решения | [decisions.md](./decisions.md) |
| Спеки | [specs/](./specs/) |
| Конвенции | [conventions/](./conventions/) |

Курс (баллы, сдача): ссылки в [docs/README.md](./README.md).

---

## План

| План шагов | Спека | Ветка |
| --- | --- | --- |
| [plan.md](./plan.md) | [specs/overview.md](./specs/overview.md) | `memory-game` |

---

## Как пользоваться

1. Открыть [plan.md](./plan.md): блок **`## Next`** + спеку шага; свериться с **decisions**.
2. Шаги сверху вниз. Один шаг = одна `feat/*` = один короткий контекст чата.
3. После merge шага в `memory-game` — `[done]` и сдвиг `## Next`.
4. Git: [conventions/git.md](./conventions/git.md).
5. Не начинать соседний шаг, пока текущий `## Next` не закрыт.
6. Решение или смена поведения → `decisions.md` / спека в том же PR.

---

## Жёсткие ограничения

Делать: пустой `<body>` кроме `script`, `document.createElement`, vanilla JS, Фишер–Йейтс, общая модалка, `localStorage`, RS git convention.

Не делать: `innerHTML` / `insertAdjacentHTML` / `DOMParser`, `alert` / `confirm` / `prompt`, React и UI-библиотеки, копирование DOM из референса flowforfrank, таймер и уровни сложности ради баллов.
