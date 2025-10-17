import { createContext, useContext, useState, useEffect } from 'react'
import type { ReactNode } from 'react'
import type { Movie } from '@/types/movie-list'
import { useInfiniteMovies } from '@/hooks/use-infinite-movies'
import { APP_CONFIG } from '@/config/app-config'

interface SearchContextType {
  searchQuery: string
  searchResults: Movie[]
  isSearching: boolean
  totalResults: number
  hasMore: boolean
  searchMovies: (query: string) => void
  fetchMore: () => void
}

const SearchContext = createContext<SearchContextType | undefined>(undefined)

interface SearchProviderProps {
  children: ReactNode
}

export function SearchProvider({ children }: SearchProviderProps) {
  const [searchQuery, setSearchQuery] = useState('')

  const {
    movies: searchResults,
    loading: isSearching,
    totalResults,
    hasMore,
    fetchMore,
    reset
  } = useInfiniteMovies({
    endpoint: '/search/movie',
    params: {
      query: searchQuery,
      language: APP_CONFIG.DEFAULT_LANGUAGE
    },
    enabled: !!searchQuery.trim()
  })

  const searchMovies = (query: string) => {
    if (query.trim() !== searchQuery) {
      setSearchQuery(query.trim())
    }
  }

  useEffect(() => {
    if (searchQuery) {
      reset()
    }
  }, [searchQuery, reset])

  const value = {
    searchQuery,
    searchResults,
    isSearching,
    totalResults,
    hasMore,
    searchMovies,
    fetchMore,
  }

  return (
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  )
}

export function useSearch() {
  const context = useContext(SearchContext)
  if (context === undefined) {
    throw new Error('useSearch deve ser usado dentro de um SearchProvider')
  }
  return context
}