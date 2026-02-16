export const TASKS = [
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
] as const

export type TaskId = (typeof TASKS)[number]['id']
