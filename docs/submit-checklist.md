# Чеклист сдачи Memory Game

В **Cross-Check: Submit** нужна ссылка на **Pull Request**, не на репозиторий и не на деплой.

Сдаточный PR: `memory-game` → `main`. Он открыт с начала работы, в Cross-Check: Submit его отправлять после `feat/readme-deploy`. До этого не сдавать.

Шаги игры — отдельные PR в `memory-game`, не в `main`.

---

## Перед Submit

1. Работа в ветке `memory-game`. История коммитов по шагам, сообщения по [git convention](https://rs.school/docs/git-convention).
2. Деплой открывается в инкогнито без логина и VPN. Ожидаемый URL: `https://bogagree.github.io/memory-game/` ([D-006](./decisions.md)).
3. PR: `memory-game` → `main`, название **Memory Game**. **Не мержить** до конца проверки.
4. В описании PR — ссылка на деплой и самооценка по всем пунктам критериев, включая README. Невыполненное тоже отметить.
5. README в ветке `memory-game`: что это за игра и как запустить локально. Копировать его в `main` не нужно.
6. RS App → **Cross-Check: Submit** → это задание → **Solution URL** = URL PR.
7. Репозиторий публичный к началу cross-check.

Шаблон описания: [.github/PULL_REQUEST_TEMPLATE.md](../.github/PULL_REQUEST_TEMPLATE.md). Требования курса: [PR requirements](https://rs.school/docs/short-track/pull-request-requirements).

## GitHub Pages (когда есть `index.html`)

Settings → Pages → branch `memory-game`, folder `/`.
URL: `https://bogagree.github.io/memory-game/`

## Самооценка (все пункты)

| Пункт | Баллы |
| --- | --- |
| Генерация разметки | 15 |
| Начало игры | 10 |
| Перемешивание | 5 |
| Выбор карточек | 15 |
| Несовпавшие пары | 10 |
| Счётчики | 5 |
| Модальные окна | 15 |
| Таблица лидеров | 10 |
| Новая игра | 15 |
| README | +5 |

Итог: сумма минус штрафы, не меньше 0 и не больше 100.
