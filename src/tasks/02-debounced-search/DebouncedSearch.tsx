// TODO: дебаунс поиска + AbortController, скелетон, обработка race condition

export function DebouncedSearch() {
  return (
    <div>
      <input type="text" placeholder="Поиск..." aria-label="Поиск" />
      <p>Реализуй дебаунс, отмену запросов и скелетон по README.</p>
    </div>
  )
}
