import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders header and task list', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /react practice/i })).toBeInTheDocument()
    expect(screen.getByText(/выбери задачу/i)).toBeInTheDocument()
    expect(screen.getByText(/виртуальный список/i)).toBeInTheDocument()
  })
})
