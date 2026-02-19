# Список тем: профессиональный React

Сводка тем, которые часто встречаются в профессиональной разработке на React. По этому списку можно планировать новые задачи (в первую очередь — продвинутый уровень).

---

## Уже покрыто задачами в проекте

| Тема | Задача | Уровень |
|------|--------|--------|
| useState, базовый state | 06-basic-counter, 07-basic-list | базовый |
| Формы, валидация, контролируемые инпуты | 08-form-validation | средний |
| useEffect, cleanup (таймеры, подписки) | 09-timer-cleanup | средний |
| Виртуализация списков | 01-virtual-list | средний |
| Debounce, AbortController, race condition | 02-debounced-search | средний |
| useMemo, тяжёлые вычисления, селекторы | 03-memo-selectors | средний |
| Контекст: разбиение, подписка на часть (селекторы) | 04-context-splitting | продвинутый |
| Code splitting, React.lazy, Suspense, прелоад | 05-code-splitting | продвинутый |
| useReducer, сложная логика (stepper/wizard) | 14-use-reducer | продвинутый |
| Portals — модалка, оверлей, focus trap | 15-portals | продвинутый |
| useTransition, useDeferredValue | 10-transition-deferred | senior |
| Error Boundary, восстановление | 11-error-boundary-recovery | senior |
| useSyncExternalStore | 12-use-sync-external-store | senior |
| Compound components (Tabs/Accordion + контекст) | 13-compound-components | senior |

---

## Пропущенные темы (кандидаты на новые задачи)

### Продвинутый уровень (advanced)

- ~~useReducer и сложная логика состояния~~ → задача 14
- ~~Portals~~ → задача 15
- **forwardRef и useImperativeHandle** — проброс ref во вложенный DOM или нативный элемент; вынос императивного API (focus, scroll, play) через useImperativeHandle вместо прямого доступа к DOM.
- **Контролируемые/неконтролируемые компоненты (control props)** — один компонент поддерживает и управляемый режим (value + onChange), и неуправляемый (defaultValue); полезно для библиотек и переиспользуемых UI.
- **Render props** — компонент принимает функцию (children как функция или render prop), передаёт в неё данные/колбэки; композиция и переиспользование логики без контекста.

### Средний уровень (если понадобится)

- **React.memo и ре-рендеры** — когда memo имеет смысл, сравнение пропсов, работа с колбэками (useCallback).
- **Кастомные хуки (композиция)** — вынос логики в хук, композиция хуков, зависимости и стабильность ссылок.

### Упоминаются в проде, но уже частично закрыты

- **HOC (Higher-Order Component)** — обёртка «компонент → компонент»; сейчас чаще заменяют кастомными хуками и композицией, но паттерн полезно знать для легаси и библиотек.
- **Stale closure в хуках** — обычно разбирают в рамках useEffect/useCallback; отдельная задача возможна (useRef для «последнего» значения, useEvent-подход).

---

## Рекомендуемый порядок добавления (продвинутый)

1. **useReducer** — база для сложного state и дальнейших паттернов (state reducer).
2. **Portals** — часто нужны в реальных проектах (модалки, тултипы).
3. **forwardRef / useImperativeHandle** — когда нужен императивный API компонента.
4. **Control props (controlled/uncontrolled)** — уровень «библиотечного» компонента.
5. **Render props** — классический паттерн композиции, встречается в коде и гайдах.

Список можно дополнять (например, тестами, SSR, Server Components) по мере расширения репозитория.
