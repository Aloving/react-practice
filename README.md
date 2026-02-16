# React Practice — Оптимизация

Репозиторий для практики React с фокусом на **оптимизацию**: виртуализация, мемоизация, контексты, code splitting.

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
  test/           # setup для Vitest
  App.tsx
  main.tsx
```

В каждой папке задачи:

- **README.md** — условие, подсказки, критерии приёмки
- Компонент(ы) для реализации (заглушки уже есть)

## Задачи (5 штук, средний — продвинутый уровень)

| № | Задача | Уровень |
|---|--------|--------|
| 01 | Виртуальный список (рендер только видимых + буфер) | средний |
| 02 | Дебаунс поиска + AbortController, скелетон, race condition | средний |
| 03 | useMemo для фильтрации/сортировки, тяжёлые вычисления | средний |
| 04 | Разделение контекста + подписка на часть (useContextSelector) | продвинутый |
| 05 | Code splitting (lazy + Suspense), прелоад по hover | продвинутый |

Запусти приложение, выбери задачу в списке и реализуй её по README в соответствующей папке.
