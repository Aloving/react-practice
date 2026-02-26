import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import { fireEvent } from '@testing-library/react'
import { DebouncedSearch } from './DebouncedSearch'

// Мок fetch — возвращает результат по query
const createFetchMock = () => {
  const calls: { url: string; signal?: AbortSignal }[] = []
  const mockFetch = vi.fn((url: string | URL, opts?: { signal?: AbortSignal }) => {
    const urlStr = typeof url === 'string' ? url : url.toString()
    calls.push({ url: urlStr, signal: opts?.signal })
    try {
      const u = new URL(urlStr, 'http://localhost')
      const query = u.searchParams.get('q') ?? urlStr.split('q=')[1]?.split('&')[0] ?? ''
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ query, items: [`Result for ${query}`] }),
      } as Response)
    } catch {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ query: '', items: [] }),
      } as Response)
    }
  })
  return { mockFetch, calls }
}

describe('DebouncedSearch', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
    vi.restoreAllMocks()
  })

  it('renders input and placeholder', () => {
    render(<DebouncedSearch />)
    expect(screen.getByRole('textbox', { name: /поиск/i })).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/поиск/i)).toBeInTheDocument()
  })

  it('sends request only after debounce pause', async () => {
    const { mockFetch, calls } = createFetchMock()
    vi.stubGlobal('fetch', mockFetch)

    render(<DebouncedSearch />)
    const input = screen.getByRole('textbox', { name: /поиск/i })

    fireEvent.change(input, { target: { value: 'react' } })
    expect(calls.length).toBe(0)

    vi.advanceTimersByTime(400)

    await waitFor(
      () => {
        expect(calls.length).toBeGreaterThanOrEqual(1)
      },
      { timeout: 1000 }
    )
  })

  it('shows loading/skeleton during fetch', async () => {
    let resolveFetch!: (value: Response) => void
    const fetchPromise = new Promise<Response>((r) => {
      resolveFetch = r
    })
    vi.stubGlobal('fetch', vi.fn(() => fetchPromise))

    render(<DebouncedSearch />)
    const input = screen.getByRole('textbox', { name: /поиск/i })

    fireEvent.change(input, { target: { value: 'test' } })
    vi.advanceTimersByTime(400)

    const loader =
      screen.queryByRole('status') ??
      document.querySelector('[data-testid="skeleton"]') ??
      document.querySelector('[class*="skeleton"]') ??
      document.querySelector('[class*="loader"]')
    expect(loader).toBeTruthy()

    resolveFetch({
      ok: true,
      json: () => Promise.resolve({ items: [] }),
    } as Response)
  })

  it('displays result of last request when query changes before response (race condition)', async () => {
    const resolves: Array<(v: Response) => void> = []
    const mockFetch = vi.fn(
      (_url: string) =>
        new Promise<Response>((r) => {
          resolves.push(r)
        })
    )
    vi.stubGlobal('fetch', mockFetch)

    render(<DebouncedSearch />)
    const input = screen.getByRole('textbox', { name: /поиск/i })

    fireEvent.change(input, { target: { value: 'a' } })
    vi.advanceTimersByTime(400)
    fireEvent.change(input, { target: { value: 'ab' } })
    vi.advanceTimersByTime(400)

    expect(mockFetch).toHaveBeenCalled()

    resolves[0]?.({
      ok: true,
      json: () => Promise.resolve({ query: 'a', items: ['Old result'] }),
    } as Response)
    resolves[1]?.({
      ok: true,
      json: () => Promise.resolve({ query: 'ab', items: ['Last result'] }),
    } as Response)

    await waitFor(
      () => {
        expect(screen.getByText(/last result/i)).toBeInTheDocument()
      },
      { timeout: 2000 }
    )
  })
})
