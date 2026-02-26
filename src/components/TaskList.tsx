import { TASKS, LEVEL_ORDER, LEVEL_LABELS, type TaskId, type LevelFilter } from '@/tasks/tasks.config'

type TaskListProps = {
  currentTask: TaskId | null
  onSelectTask: (id: TaskId | null) => void
  levelFilter: LevelFilter
}

function filterAndSortTasks<T extends { level: string; number: number }>(
  tasks: readonly T[],
  levelFilter: LevelFilter
): T[] {
  const filtered =
    levelFilter === 'all'
      ? [...tasks]
      : tasks.filter((t) => t.level === levelFilter)
  return filtered.sort((a, b) => {
    const levelDiff =
      LEVEL_ORDER.indexOf(a.level as (typeof LEVEL_ORDER)[number]) -
      LEVEL_ORDER.indexOf(b.level as (typeof LEVEL_ORDER)[number])
    return levelDiff !== 0 ? levelDiff : a.number - b.number
  })
}

export function TaskList({ currentTask, onSelectTask, levelFilter }: TaskListProps) {
  const tasksToShow = filterAndSortTasks(TASKS, levelFilter)

  return (
    <ul className="task-list">
      {tasksToShow.map((task) => (
        <li key={task.id} className="task-item">
          <button
            type="button"
            className={currentTask === task.id ? 'active' : undefined}
            onClick={() => onSelectTask(currentTask === task.id ? null : task.id)}
          >
            <span className="task-number">№{task.number}</span>
            <span className="task-title">
              {LEVEL_LABELS[task.level]} — {task.title}
            </span>
          </button>
          <p className="task-desc">{task.description}</p>
        </li>
      ))}
    </ul>
  )
}
