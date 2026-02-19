export const TASKS = [
  {
    id: '06-basic-counter',
    title: 'Счётчик с useState',
    level: 'basic',
    description: 'Простой счётчик: кнопки +1 и -1, отображение текущего значения. Базовая работа с useState.',
  },
  {
    id: '07-basic-list',
    title: 'Список с добавлением и удалением',
    level: 'basic',
    description: 'Форма для добавления элемента в список и кнопка удаления у каждого элемента. Управление массивом в state.',
  },
  {
    id: '08-form-validation',
    title: 'Контролируемая форма с валидацией',
    level: 'medium',
    description: 'Форма с несколькими полями, локальная валидация, отображение ошибок, кнопка отправки disabled при невалидных данных.',
  },
  {
    id: '09-timer-cleanup',
    title: 'Таймер с очисткой в useEffect',
    level: 'medium',
    description: 'Компонент с setInterval (таймер обратного отсчёта или секундомер) и корректная очистка интервала в cleanup useEffect.',
  },
  {
    id: '01-virtual-list',
    title: 'Виртуальный список',
    level: 'medium',
    description: 'Реализовать виртуализированный список: рендерить только видимые элементы + буфер, остальное — через placeholder по высоте.',
  },
  {
    id: '02-debounced-search',
    title: 'Дебаунс поиска и отмена запросов',
    level: 'medium',
    description: 'Поле поиска с debounce и отменой предыдущего fetch при новом вводе (AbortController). Показать скелетон/лоадер и обработать race condition.',
  },
  {
    id: '03-memo-selectors',
    title: 'useMemo / селекторы и тяжёлые вычисления',
    level: 'medium',
    description: 'Список с фильтрами и сортировкой. Вынести фильтрацию/сортировку в useMemo; убедиться, что тяжёлые вычисления не перезапускаются без необходимости.',
  },
  {
    id: '04-context-splitting',
    title: 'Разделение контекста и подписка на часть состояния',
    level: 'advanced',
    description: 'Несколько контекстов вместо одного большого; подписка на часть состояния (селектор/useContextSelector-подход), чтобы не ре-рендерить всё дерево.',
  },
  {
    id: '05-code-splitting',
    title: 'Code splitting и ленивая загрузка маршрутов',
    level: 'advanced',
    description: 'React.lazy + Suspense для маршрутов; прелоад следующего маршрута при hover на ссылку; измерить уменьшение начального бандла.',
  },
  {
    id: '14-use-reducer',
    title: 'useReducer и сложная логика состояния',
    level: 'advanced',
    description: 'Виджет с несколькими шагами (stepper/wizard) или state machine: useReducer для переходов, чистый reducer, предсказуемая логика. Пример: форма регистрации по шагам или корзина с этапами.',
  },
  {
    id: '15-portals',
    title: 'Portals — модалка и оверлей',
    level: 'advanced',
    description: 'Модальное окно через createPortal: рендер вне родительского DOM, оверлей, закрытие по Escape и клику вне, focus trap для доступности.',
  },
  {
    id: '10-transition-deferred',
    title: 'useTransition и useDeferredValue',
    level: 'senior',
    description: 'Отложенные обновления при тяжёлых операциях: useTransition для неблокирующего state, useDeferredValue для отложенного ввода в поиск/фильтр. Сохранить отзывчивость UI.',
  },
  {
    id: '11-error-boundary-recovery',
    title: 'Error Boundary и восстановление',
    level: 'senior',
    description: 'Error Boundary с fallback-UI, кнопкой «Повторить» и опциональным логированием в сервис. Обработать асинхронные ошибки (например, из промисов в useEffect).',
  },
  {
    id: '12-use-sync-external-store',
    title: 'useSyncExternalStore и внешний стор',
    level: 'senior',
    description: 'Подписка на внешнее хранилище (localStorage, браузерный API или сторонняя библиотека) через useSyncExternalStore. Избежать tearing при конкурентном рендере и корректно обработать серверный рендер.',
  },
  {
    id: '13-compound-components',
    title: 'Compound components и контекст',
    level: 'senior',
    description: 'Реализовать составной компонент (например, Tabs или Accordion): подкомпоненты связаны через контекст, гибкий API разметки, разделение ответственности без prop drilling.',
  },
] as const

export type TaskId = (typeof TASKS)[number]['id']
