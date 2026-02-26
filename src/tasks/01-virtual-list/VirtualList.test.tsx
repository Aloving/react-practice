import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { VirtualList } from './VirtualList'

const createItems = (count: number) =>
  Array.from({ length: count }, (_, i) => ({ id: i, label: `Item ${i}` }))

const defaultProps = {
  items: createItems(100),
  renderItem: (item: { id: number; label: string }) => (
    <div data-testid="virtual-item">{item.label}</div>
  ),
  itemHeight: 40,
  containerHeight: 400,
}

describe('VirtualList', () => {
  it('renders without crashing', () => {
    render(<VirtualList {...defaultProps} />)
    expect(screen.getByText(/виртуальный список/i)).toBeInTheDocument()
  })

  it('with 10000 items does not create 10000 DOM nodes', () => {
    const items = createItems(10_000)
    const { container } = render(
      <VirtualList {...defaultProps} items={items} />
    )

    const itemNodes = container.querySelectorAll('[data-testid="virtual-item"]')
    // Критерий приёмки: рендер только видимых + буфер, не все 10000
    expect(itemNodes.length).toBeLessThan(500)
    expect(itemNodes.length).toBeGreaterThan(0)
  })

  it('renders visible items', () => {
    const items = createItems(50)
    render(<VirtualList {...defaultProps} items={items} />)

    // При высоте 400px и itemHeight 40 — видно ~10 элементов + буфер
    const visibleItems = screen.queryAllByTestId('virtual-item')
    expect(visibleItems.length).toBeGreaterThan(0)
    expect(visibleItems[0]).toHaveTextContent('Item')
  })
})
