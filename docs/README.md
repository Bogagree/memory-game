# Docs — Spec-Driven Development

Memory Game ведётся по **SDD** (как в [rsschool-landing-page](https://github.com/Bogagree/rsschool-landing-page)): требования и решения живут в репозитории и эволюционируют вместе с кодом.

## Карта

| Файл / папка | Назначение |
| --- | --- |
| [decisions.md](./decisions.md) | Закрытые решения (`Accepted`) |
| [specs/](./specs/) | Спеки продукта и фич |
| [conventions/](./conventions/) | Код, git, PR |
| [implementation-plan.md](./implementation-plan.md) | Общий порядок работ |
| [plan.md](./plan.md) | Чеклист шагов |
| [qa/](./qa/) | Отчёты проверки шага (`docs/qa/<step>.md`) |
| [submit-checklist.md](./submit-checklist.md) | Сдача cross-check |

## Как работать

1. **Задача** → короткая сессия, одна feature-ветка от `memory-game`.
2. **Перед кодом** → нужная спека + `decisions.md`.
3. **Решение принято** → `Accepted` в `decisions.md` (дата, кратко «почему»).
4. **Поведение изменилось** → обновить спеку в том же PR, что и код.
5. **Задача закрыта** → итог в спеке / decision / PR; длинный чат дальше не тащить.

## Источники курса (вне репо)

Канонические критерии — у RS School. Локальные спеки резюмируют их и фиксируют _наши_ договорённости:

- [Memory Game](https://github.com/rolling-scopes-school/tasks/blob/master/tasks/memory-game/README.md)
- [Git convention](https://rs.school/docs/git-convention)
- [PR requirements](https://rs.school/docs/short-track/pull-request-requirements)

Для механики переворота можно смотреть [flowforfrank/memory-game](https://github.com/flowforfrank/memory-game/blob/master/assets/game.js). Его разметку не копировать: `innerHTML` и `DOMParser` в этом задании запрещены. См. [D-002](./decisions.md).
