# Memory Game — план шагов

Общие правила: [implementation-plan.md](./implementation-plan.md).
Спека продукта: [specs/overview.md](./specs/overview.md).
Канон: [README задания](https://github.com/rolling-scopes-school/tasks/blob/master/tasks/memory-game/README.md) (**100** + до **5** за README, итог не больше 100).

База: ветка `memory-game`. Фичи мержим сюда; PR `memory-game` → `main` на cross-check **не мержить**.

---

## Next (для нового чата)

```text
feat/mismatch-counters
```

Спека шага: [specs/game.md](./specs/game.md), [specs/counters.md](./specs/counters.md). Несовпадение закрывается через 1000 мс, ходы и пары считаются. Модалка победы — следующий шаг.

---

## Шаги

Маркер `[done]` = влито в `memory-game`.

```text
main
└── memory-game
    ├── [done] docs: sdd skeleton          # docs по образцу landing-page
    ├── [done] feat/app-shell              # index.html, el(), хедер, счётчики 0, пустое поле
    ├── [done] feat/board                  # 16 закрытых карточек, старт при загрузке
    ├── [done] feat/shuffle                # Фишер–Йейтс при загрузке
    ├── [done] feat/flip-pair              # две карточки, совпадение остаётся, лишние клики игнор
    ├── [    ] feat/mismatch-counters      # закрытие через 1000 мс, замок, ходы и пары
    ├── [    ] feat/win-modal              # общая модалка + победа
    ├── [    ] feat/leaderboard            # топ-10, localStorage
    ├── [    ] feat/new-game               # рестарт из хедера и из победы, отмена таймера
    └── [    ] feat/readme-deploy          # инструкция запуска, Pages, PR body
```

| Шаг | Спека | Баллы, которые закрывает |
| --- | --- | --- |
| `feat/app-shell` | [architecture.md](./specs/architecture.md), [header.md](./specs/header.md) | Генерация разметки, 15 |
| `feat/board` | [board.md](./specs/board.md) | Начало игры, 10 |
| `feat/shuffle` | [board.md](./specs/board.md) | Перемешивание, 5 |
| `feat/flip-pair` | [game.md](./specs/game.md) | Выбор карточек, 15 |
| `feat/mismatch-counters` | [game.md](./specs/game.md), [counters.md](./specs/counters.md) | Несовпавшие пары, 10; счётчики, 5 |
| `feat/win-modal` | [modal.md](./specs/modal.md) | Модалка победы и общие правила, часть из 15 |
| `feat/leaderboard` | [leaderboard.md](./specs/leaderboard.md) | Таблица лидеров, 10; модалки не сбрасывают поле |
| `feat/new-game` | [game.md](./specs/game.md), [header.md](./specs/header.md) | Новая игра, 15 |
| `feat/readme-deploy` | [submit-checklist.md](./submit-checklist.md) | README, +5 |

---

## Пока не делать

- Таймер прохождения, звук, уровни сложности
- `innerHTML`, `DOMParser`, `alert` / `confirm` / `prompt`
- Merge PR `memory-game` → `main`
