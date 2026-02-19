# React Practice — Оптимизация

Репозиторий для практики React с фокусом на **оптимизацию** и продвинутые темы: от базового useState до виртуализации, мемоизации, контекстов, code splitting и senior-паттернов.

## Стек

- **React 18** + TypeScript
- **Vite** — сборка и dev-сервер
- **Vitest** + Testing Library — тесты

## Установка и запуск

```bash
npm install
npm run dev      # dev-сервер
npm run build    # production-сборка
npm run test     # тесты (watch)
npm run test:run # тесты один раз
```

## Структура проекта

```
src/
  components/     # общие компоненты (TaskList и т.д.)
  tasks/          # папки с задачами
    01-virtual-list/
    02-debounced-search/
    03-memo-selectors/
    04-context-splitting/
    05-code-splitting/
    06-basic-counter/
    07-basic-list/
    08-form-validation/
    09-timer-cleanup/
    10-transition-deferred/
    11-error-boundary-recovery/
    12-use-sync-external-store/
    13-compound-components/
    14-use-reducer/
    15-portals/
  test/           # setup для Vitest
  App.tsx
  main.tsx
```

В каждой папке задачи:

- **README.md** — условие, подсказки, критерии приёмки
- Компонент(ы) для реализации (заглушки уже есть)

## Задачи (15 штук: базовый — senior)

| № | Задача | Уровень |
|---|--------|--------|
| 06 | Счётчик с useState | базовый |
| 07 | Список с добавлением и удалением | базовый |
| 08 | Контролируемая форма с валидацией | средний |
| 09 | Таймер с очисткой в useEffect | средний |
| 01 | Виртуальный список (рендер только видимых + буфер) | средний |
| 02 | Дебаунс поиска + AbortController, скелетон, race condition | средний |
| 03 | useMemo для фильтрации/сортировки, тяжёлые вычисления | средний |
| 04 | Разделение контекста + подписка на часть (useContextSelector) | продвинутый |
| 05 | Code splitting (lazy + Suspense), прелоад по hover | продвинутый |
| 14 | useReducer и сложная логика (stepper/wizard) | продвинутый |
| 15 | Portals — модалка с оверлеем, Escape, focus trap | продвинутый |
| 10 | useTransition и useDeferredValue | senior |
| 11 | Error Boundary и восстановление | senior |
| 12 | useSyncExternalStore и внешний стор | senior |
| 13 | Compound components и контекст (Tabs/Accordion) | senior |

Запусти приложение, выбери задачу в списке и реализуй её по README в соответствующей папке.

Полный список профессиональных тем React и пропущенных тем (кандидаты на новые задачи) — в [docs/REACT_TOPICS.md](docs/REACT_TOPICS.md).
