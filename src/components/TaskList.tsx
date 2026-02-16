import { TASKS, type TaskId } from '@/tasks/tasks.config'

type TaskListProps = {
  currentTask: TaskId | null
  onSelectTask: (id: TaskId | null) => void
}

export function TaskList({ currentTask, onSelectTask }: TaskListProps) {
  return (
    <ul className="task-list">
      {TASKS.map((task) => (
        <li key={task.id} className="task-item">
          <button
            type="button"
            className={currentTask === task.id ? 'active' : undefined}
            onClick={() => onSelectTask(currentTask === task.id ? null : task.id)}
          >
            <span className="task-id">{task.id}</span>
            <span className="task-title">{task.title}</span>
            <span className="task-level">{task.level}</span>
          </button>
          <p className="task-desc">{task.description}</p>
        </li>
      ))}
    </ul>
  )
}
