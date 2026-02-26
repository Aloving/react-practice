// TODO: список с фильтрами и сортировкой, всё в useMemo

const MOCK_ITEMS = [
  { id: '1', name: 'Товар A', price: 100, category: 'X' },
  { id: '2', name: 'Товар B', price: 200, category: 'Y' },
  { id: '3', name: 'Товар C', price: 150, category: 'X' },
  { id: '4', name: 'Товар D', price: 50, category: 'Y' },
]

export interface FilteredListProps {
  /** Вызывается при каждом пересчёте отфильтрованного списка (для теста useMemo) */
  onFilterCompute?: () => void
}

export function FilteredList({ onFilterCompute }: FilteredListProps = {}) {
  return (
    <div>
      <p>Фильтры и сортировка с useMemo — реализуй по README.</p>
      <ul>
        {MOCK_ITEMS.map((item) => (
          <li key={item.id}>{item.name} — {item.price}</li>
        ))}
      </ul>
    </div>
  )
}
