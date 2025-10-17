import { useState, useCallback, useRef } from 'react'
import { apiRequest } from '@/lib/api'
import type { Movie } from '@/types/movie-list'
import type { MovieList } from '@/types/movie-list'

interface UseInfiniteMoviesOptions {
  endpoint: string
  params?: Record<string, string | number>
  enabled?: boolean
}

export function useInfiniteMovies({ endpoint, params = {}, enabled = true }: UseInfiniteMoviesOptions) {
  const [movies, setMovies] = useState<Movie[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [totalResults, setTotalResults] = useState(0)
  const [hasMore, setHasMore] = useState(true)

  const loadingRef = useRef(false);

  const fetchMovies = useCallback(async (page: number, reset = false) => {
    if (loadingRef.current || !hasMore || !enabled) return;

    setLoading(true)
    setError(null)
    loadingRef.current = true;

    try {
      const response = await apiRequest<MovieList>(endpoint, {
        params: {
          ...params,
          page
        }
      })

      if (reset) {
        setMovies(response.results)
      } else {
        setMovies(prev => [...prev, ...response.results])
      }

      setCurrentPage(page)
      setTotalPages(response.total_pages)
      setTotalResults(response.total_results)
      setHasMore(page < response.total_pages)
    } catch (err: any) {
      setError(err)
      if (reset) {
        setMovies([])
        setTotalResults(0)
      }
    } finally {
      setLoading(false)
      loadingRef.current = false
    }
  }, [endpoint, JSON.stringify(params), enabled])

  const fetchMore = useCallback(() => {
    if (!loading && hasMore) {
      fetchMovies(currentPage + 1)
    }
  }, [fetchMovies, loading, hasMore, currentPage])

  const reset = useCallback(() => {
    setCurrentPage(1)
    setHasMore(true)
    fetchMovies(1, true)
  }, [fetchMovies])

  return {
    movies,
    loading,
    error,
    fetchMore,
    reset,
    hasMore,
    totalResults,
    currentPage,
    totalPages
  }
}