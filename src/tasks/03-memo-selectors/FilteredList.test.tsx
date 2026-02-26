import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { fireEvent } from '@testing-library/react'
import { FilteredList } from './FilteredList'

describe('FilteredList', () => {
  it('renders list of items', () => {
    render(<FilteredList />)
    expect(screen.getByText(/фильтры и сортировка/i)).toBeInTheDocument()
    expect(screen.getByText(/Товар A/i)).toBeInTheDocument()
    expect(screen.getByText(/Товар B/i)).toBeInTheDocument()
    expect(screen.getByText(/Товар C/i)).toBeInTheDocument()
  })

  it('filters by category when category filter is applied', () => {
    render(<FilteredList />)
    const categorySelect = screen.getByLabelText(/категория/i)
    fireEvent.change(categorySelect, { target: { value: 'X' } })
    expect(screen.getByText(/Товар A/)).toBeInTheDocument()
    expect(screen.getByText(/Товар C/)).toBeInTheDocument()
    expect(screen.queryByText(/Товар B/)).not.toBeInTheDocument()
  })

  it('filters by search query in name', () => {
    render(<FilteredList />)
    const searchInput = screen.getByPlaceholderText(/поиск|назван/i)
    fireEvent.change(searchInput, { target: { value: 'A' } })
    expect(screen.getByText(/Товар A/)).toBeInTheDocument()
    expect(screen.queryByText(/Товар B/)).not.toBeInTheDocument()
  })

  it('sorts by price ascending', () => {
    render(<FilteredList />)
    const sortSelect = screen.getByLabelText(/сортировка|сортир/i)
    fireEvent.change(sortSelect, { target: { value: 'price-asc' } })
    const listItems = screen.getAllByRole('listitem')
    const first = listItems[0]?.textContent ?? ''
    expect(first).toMatch(/Товар D|50/)
  })

  it('does not recompute filtered list when unrelated state changes (useMemo deps)', () => {
    const onCompute = vi.fn()
    render(<FilteredList onFilterCompute={onCompute} />)
    onCompute.mockClear()

    const counterButton = screen.getByRole('button', { name: /\+1|\+ |счётчик/i })
    fireEvent.click(counterButton)
    fireEvent.click(counterButton)

    expect(onCompute).not.toHaveBeenCalled()
  })

  it('recomputes when filter changes', () => {
    const onCompute = vi.fn()
    render(<FilteredList onFilterCompute={onCompute} />)
    onCompute.mockClear()

    const searchInput = screen.getByPlaceholderText(/поиск|назван/i)
    fireEvent.change(searchInput, { target: { value: 'B' } })

    expect(onCompute).toHaveBeenCalled()
  })
})
