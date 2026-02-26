# Задача 16 — Custom Hooks (переиспользуемая логика)

**Уровень:** средний

## Цель

Вынести повторяющуюся логику в кастомные хуки: `useLocalStorage`, `useDebounce`, `usePrevious`. Применить `useRef` для хранения мутабельных значений и `useEffect` для побочных эффектов.

## Требования

### 1. `useLocalStorage<T>(key, initialValue)`

- Синхронизация state с `localStorage`.
- При монтировании — читать из `localStorage`, при отсутствии — `initialValue`.
- При изменении значения — писать в `localStorage` и обновлять state.
- Поддержка JSON-сериализации (числа, объекты, массивы).
- Обработка `JSON.parse` при ошибке (fallback на `initialValue`).

### 2. `useDebounce<T>(value, delay)`

- Возвращает значение с задержкой: при изменении `value` — через `delay` мс возвращается новое значение.
- При быстром вводе предыдущий таймер должен отменяться (cleanup в `useEffect`).

### 3. `usePrevious<T>(value)`

- Возвращает предыдущее значение `value` (на один рендер отстаёт).
- Реализовать через `useRef`: сохранять `value` в effect, в рендере возвращать сохранённое.

## Демо-компонент

- **Настройки**: select темы (light/dark) и локали (ru/en) — сохраняются в `localStorage` через `useLocalStorage`.
- **Поиск с debounce**: инпут, ниже отображается debounced-значение (или результаты поиска) — через `useDebounce`.
- **Счётчик «было / стало»**: кнопка +1, показ `предыдущее → текущее` через `usePrevious`.

## Подсказки

- `usePrevious`: `const ref = useRef<T>(); useEffect(() => { ref.current = value; }); return ref.current;`
- `useDebounce`: `useState` + `useEffect` с `setTimeout` и `clearTimeout` в cleanup.
- `useLocalStorage`: читать в `useState(() => JSON.parse(localStorage.getItem(key)) ?? initialValue)`; в `useEffect` писать при изменении.

## Критерии приёмки

- Все три хука работают и переиспользуемы.
- `useLocalStorage`: значение сохраняется при перезагрузке страницы.
- `useDebounce`: при быстром вводе отображается только финальное значение после паузы.
- `usePrevious`: корректно показывает предыдущее значение при каждом изменении.
- Тесты (опционально): мок `localStorage`, проверка вызовов `setTimeout`/`clearTimeout`.
