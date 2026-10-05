---
name: memory-game-next-step
description: >-
  Runs the next Memory Game plan step from docs/plan.md: syncs memory-game,
  implements one feat branch, and opens a PR into memory-game. Use when the
  user says следующий шаг, запусти следующий шаг, делай следующий шаг, or
  next step.
---

# Следующий шаг Memory Game

Запусти шаг в этом чате. Не ограничивайся инструкцией, как его запустить.

Один запуск = один пункт `docs/plan.md`. PR только в `memory-game`. PR `memory-game` → `main` не создавать и не мержить.

## Какой шаг брать

1. `git fetch origin`, затем `git checkout memory-game` и `git pull`.
2. Прочитай блок `## Next` в `docs/plan.md`. Имя шага — текст внутри ограждения, например `feat/board`.
3. `gh pr list --base memory-game --head <имя> --state all`.
   - **OPEN** — остановись и дай URL. Следующий пункт не начинай.
   - **MERGED** — `## Next` устарел. Реализуй первый пункт ниже со статусом `[    ]`. В том же коммите отметь слитый пункт `[done]` и запиши в `## Next` тот пункт, который делаешь.
   - **PR нет** — реализуй пункт из `## Next`.
4. Если пунктов `[    ]` не осталось — скажи, что план закрыт. Сдаточный PR не трогай.

`[done]` значит «влито в `memory-game`». Пункт, чей PR ты только открываешь, не помечай `[done]`.

## Как делать

1. Прочитай спеку этого пункта из таблицы в `docs/plan.md`, плюс `docs/decisions.md` и `docs/conventions/code.md`.
2. Ветка `<имя из плана>` от свежей `memory-game`.
3. Сделай только контракт этого пункта. Соседний пункт не начинай.
4. Смена поведения — обнови спеку в том же PR.
5. Шаг с интерфейсом проверь в браузере: пройди сценарий кликами, не одним скриншотом. Отчёт: `docs/qa/<имя без feat/>.md`. Шаг только из документации — без QA-файла.
6. Коммит по [RS git convention](https://rs.school/docs/git-convention). `git push -u origin HEAD`.
7. `gh pr create --base memory-game`. В теле: Summary, Test plan, ссылки на спеки и QA. Чеклист курса не заполняй. Футер `Made with Cursor` не добавляй.
8. Feature-PR не мержи.

## Пример

План: `## Next` = `feat/app-shell`, а PR этого шага уже MERGED. Следующая строка `[    ]` — `feat/board`.

Сделай `feat/board` от `memory-game`. В `docs/plan.md` отметь `feat/app-shell` как `[done]`, в `## Next` запиши `feat/board`. Открой PR в `memory-game`.
