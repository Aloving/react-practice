export const TASKS = [
  { number: 1, id: '06-basic-counter', title: 'Счётчик с useState', level: 'basic', description: 'Простой счётчик: кнопки +1 и -1, отображение текущего значения. Базовая работа с useState.' },
  { number: 2, id: '07-basic-list', title: 'Список с добавлением и удалением', level: 'basic', description: 'Форма для добавления элемента в список и кнопка удаления у каждого элемента. Управление массивом в state.' },
  { number: 3, id: '08-form-validation', title: 'Контролируемая форма с валидацией', level: 'medium', description: 'Форма с несколькими полями, локальная валидация, отображение ошибок, кнопка отправки disabled при невалидных данных.' },
  { number: 4, id: '09-timer-cleanup', title: 'Таймер с очисткой в useEffect', level: 'medium', description: 'Компонент с setInterval (таймер обратного отсчёта или секундомер) и корректная очистка интервала в cleanup useEffect.' },
  { number: 5, id: '01-virtual-list', title: 'Виртуальный список', level: 'medium', description: 'Реализовать виртуализированный список: рендерить только видимые элементы + буфер, остальное — через placeholder по высоте.' },
  { number: 6, id: '02-debounced-search', title: 'Дебаунс поиска и отмена запросов', level: 'medium', description: 'Поле поиска с debounce и отменой предыдущего fetch при новом вводе (AbortController). Показать скелетон/лоадер и обработать race condition.' },
  { number: 7, id: '03-memo-selectors', title: 'useMemo / селекторы и тяжёлые вычисления', level: 'medium', description: 'Список с фильтрами и сортировкой. Вынести фильтрацию/сортировку в useMemo; убедиться, что тяжёлые вычисления не перезапускаются без необходимости.' },
  { number: 8, id: '04-context-splitting', title: 'Разделение контекста и подписка на часть состояния', level: 'advanced', description: 'Несколько контекстов вместо одного большого; подписка на часть состояния (селектор/useContextSelector-подход), чтобы не ре-рендерить всё дерево.' },
  { number: 9, id: '05-code-splitting', title: 'Code splitting и ленивая загрузка маршрутов', level: 'advanced', description: 'React.lazy + Suspense для маршрутов; прелоад следующего маршрута при hover на ссылку; измерить уменьшение начального бандла.' },
  { number: 10, id: '14-use-reducer', title: 'useReducer и сложная логика состояния', level: 'advanced', description: 'Виджет с несколькими шагами (stepper/wizard) или state machine: useReducer для переходов, чистый reducer, предсказуемая логика. Пример: форма регистрации по шагам или корзина с этапами.' },
  { number: 11, id: '15-portals', title: 'Portals — модалка и оверлей', level: 'advanced', description: 'Модальное окно через createPortal: рендер вне родительского DOM, оверлей, закрытие по Escape и клику вне, focus trap для доступности.' },
  { number: 12, id: '10-transition-deferred', title: 'useTransition и useDeferredValue', level: 'senior', description: 'Отложенные обновления при тяжёлых операциях: useTransition для неблокирующего state, useDeferredValue для отложенного ввода в поиск/фильтр. Сохранить отзывчивость UI.' },
  { number: 13, id: '11-error-boundary-recovery', title: 'Error Boundary и восстановление', level: 'senior', description: 'Error Boundary с fallback-UI, кнопкой «Повторить» и опциональным логированием в сервис. Обработать асинхронные ошибки (например, из промисов в useEffect).' },
  { number: 14, id: '12-use-sync-external-store', title: 'useSyncExternalStore и внешний стор', level: 'senior', description: 'Подписка на внешнее хранилище (localStorage, браузерный API или сторонняя библиотека) через useSyncExternalStore. Избежать tearing при конкурентном рендере и корректно обработать серверный рендер.' },
  { number: 15, id: '13-compound-components', title: 'Compound components и контекст', level: 'senior', description: 'Реализовать составной компонент (например, Tabs или Accordion): подкомпоненты связаны через контекст, гибкий API разметки, разделение ответственности без prop drilling.' },
  { number: 16, id: '16-custom-hooks', title: 'Custom Hooks: useLocalStorage, useDebounce, usePrevious', level: 'medium', description: 'Вынести логику в переиспользуемые хуки: синхронизация с localStorage, debounce значения, получение предыдущего значения. Применить useRef и useEffect.' },
  { number: 17, id: '17-use-layout-effect', title: 'useLayoutEffect и измерение DOM', level: 'medium', description: 'Тултип/dropdown с динамическим позиционированием: useLayoutEffect для измерений до paint, getBoundingClientRect, ResizeObserver. Избежать мерцания.' },
] as const

export type TaskId = (typeof TASKS)[number]['id']
export type TaskLevel = (typeof TASKS)[number]['level']

export const LEVEL_ORDER: TaskLevel[] = ['basic', 'medium', 'advanced', 'senior']

export const LEVEL_LABELS: Record<TaskLevel, string> = {
  basic: 'Базовый',
  medium: 'Средний',
  advanced: 'Продвинутый',
  senior: 'Senior',
}

export type LevelFilter = 'all' | TaskLevel
