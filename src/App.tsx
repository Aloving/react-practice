import { lazy, Suspense, useState } from 'react'
import { TaskList } from './components/TaskList'
import type { TaskId } from './tasks/tasks.config'

const taskComponents: Record<TaskId, React.LazyExoticComponent<() => JSX.Element>> = {
  '01-virtual-list': lazy(() => import('./tasks/01-virtual-list/VirtualList').then((m) => ({ default: m.VirtualList }))),
  '02-debounced-search': lazy(() => import('./tasks/02-debounced-search/DebouncedSearch').then((m) => ({ default: m.DebouncedSearch }))),
  '03-memo-selectors': lazy(() => import('./tasks/03-memo-selectors/FilteredList').then((m) => ({ default: m.FilteredList }))),
  '04-context-splitting': lazy(() => import('./tasks/04-context-splitting/ContextDemo').then((m) => ({ default: m.ContextDemo }))),
  '05-code-splitting': lazy(() => import('./tasks/05-code-splitting/LazyRoutes').then((m) => ({ default: m.LazyRoutes }))),
  '06-basic-counter': lazy(() => import('./tasks/06-basic-counter/Counter').then((m) => ({ default: m.Counter }))),
  '07-basic-list': lazy(() => import('./tasks/07-basic-list/ItemList').then((m) => ({ default: m.ItemList }))),
  '08-form-validation': lazy(() => import('./tasks/08-form-validation/ValidatedForm').then((m) => ({ default: m.ValidatedForm }))),
  '09-timer-cleanup': lazy(() => import('./tasks/09-timer-cleanup/Timer').then((m) => ({ default: m.Timer }))),
  '10-transition-deferred': lazy(() => import('./tasks/10-transition-deferred/TransitionDemo').then((m) => ({ default: m.TransitionDemo }))),
  '11-error-boundary-recovery': lazy(() => import('./tasks/11-error-boundary-recovery/ErrorBoundaryDemo').then((m) => ({ default: m.ErrorBoundaryDemo }))),
  '12-use-sync-external-store': lazy(() => import('./tasks/12-use-sync-external-store/SyncExternalStoreDemo').then((m) => ({ default: m.SyncExternalStoreDemo }))),
  '13-compound-components': lazy(() => import('./tasks/13-compound-components/Tabs').then((m) => ({ default: m.Tabs }))),
  '14-use-reducer': lazy(() => import('./tasks/14-use-reducer/StepperForm').then((m) => ({ default: m.StepperForm }))),
  '15-portals': lazy(() => import('./tasks/15-portals/Modal').then((m) => ({ default: m.Modal }))),
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
