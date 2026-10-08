# Git & PR

Источники: [RS Git convention](https://rs.school/docs/git-convention), [PR requirements](https://rs.school/docs/short-track/pull-request-requirements).

## Ветки

```text
main
 └── memory-game                 ← сюда мержим feat/*
      ├── feat/...
      └── PR memory-game → main  ← cross-check, НЕ мержить
```

- Feature: `feat/<name>` от `memory-game`.
- Один шаг плана ≈ одна ветка ≈ один короткий PR в `memory-game`.
- Название сдаточного PR — **Memory Game**.

## Коммиты

- История по шагам, не 1–2 огромных коммита.
- Сообщения по RS convention (`feat:`, `fix:`, `refactor:`, `docs:`, …).
- Начальный коммит репозитория и автоматические merge-коммиты в проверке конвенции не учитываются.

## PR `feat/*` → `memory-game`

Кратко: Summary + Test plan + ссылки на затронутые `docs/specs/…` и `docs/decisions.md`.
Ссылка на QA, если шаг проверялся в браузере: `docs/qa/<step>.md`.
Чеклист курса (Task / Screenshot / Deployment / Score) **не заполнять**.
Футер `Made with Cursor` **не добавлять**.

## PR `memory-game` → `main` (cross-check)

Только здесь — полный чеклист курса. Шаблон: [.github/PULL_REQUEST_TEMPLATE.md](../../.github/PULL_REQUEST_TEMPLATE.md).

1. Task URL
2. Screenshot
3. Deployment URL
4. Done / deadline
5. Self-check / Score — все пункты, включая README

См. [submit-checklist.md](../submit-checklist.md).
