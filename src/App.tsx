import { lazy, Suspense, useState } from 'react'
import { TaskList } from './components/TaskList'
import type { TaskId } from './tasks/tasks.config'

const taskComponents: Record<TaskId, React.LazyExoticComponent<() => JSX.Element>> = {
  '01-virtual-list': lazy(() => import('./tasks/01-virtual-list/VirtualList').then((m) => ({ default: m.VirtualList }))),
  '02-debounced-search': lazy(() => import('./tasks/02-debounced-search/DebouncedSearch').then((m) => ({ default: m.DebouncedSearch }))),
  '03-memo-selectors': lazy(() => import('./tasks/03-memo-selectors/FilteredList').then((m) => ({ default: m.FilteredList }))),
  '04-context-splitting': lazy(() => import('./tasks/04-context-splitting/ContextDemo').then((m) => ({ default: m.ContextDemo }))),
  '05-code-splitting': lazy(() => import('./tasks/05-code-splitting/LazyRoutes').then((m) => ({ default: m.LazyRoutes }))),
}

function App() {
  const [currentTask, setCurrentTask] = useState<TaskId | null>(null)
  const TaskComponent = currentTask ? taskComponents[currentTask] : null

  return (
    <div className="app">
      <header className="app-header">
        <h1>React Practice — Оптимизация</h1>
        <p>Выбери задачу из списка и решай в папке <code>src/tasks/</code></p>
      </header>
      <TaskList currentTask={currentTask} onSelectTask={setCurrentTask} />
      {TaskComponent && (
        <section className="task-preview">
          <Suspense fallback={<p>Загрузка…</p>}>
            <TaskComponent />
          </Suspense>
        </section>
      )}
    </div>
  )
}

export default App
