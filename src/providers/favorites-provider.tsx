import { createContext, useContext, useState, useMemo } from 'react'
import type { ReactNode } from 'react'
import type { Movie } from '@/types/movie-list'
import type { SortOption } from '@/types/sorting'
import { APP_CONFIG } from '@/config/app-config'

interface FavoritesContextType {
  favorites: Movie[]
  sortedFavorites: Movie[]
  sortBy: SortOption
  setSortBy: (sortBy: SortOption) => void
  addFavorite: (movie: Movie) => void
  removeFavorite: (movieId: number) => void
  isFavorite: (movieId: number) => boolean
  toggleFavorite: (movie: Movie) => void
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined)

interface FavoritesProviderProps {
  children: ReactNode
}

export function FavoritesProvider({ children }: FavoritesProviderProps) {
  const [favorites, setFavorites] = useState<Movie[]>(() => {
    const saved = localStorage.getItem(APP_CONFIG.STORAGE_KEYS.FAVORITES)
    return saved ? JSON.parse(saved) : []
  })

  const [sortBy, setSortBy] = useState<SortOption>('title-a-z')

  const sortedFavorites = useMemo(() => {
    switch (sortBy) {
      case 'title-a-z':
        return favorites.sort((a, b) => a.title.localeCompare(b.title))
      case 'title-z-a':
        return favorites.sort((a, b) => b.title.localeCompare(a.title))
      case 'rating':
        return favorites.sort((a, b) => b.vote_average - a.vote_average)
      default:
        return favorites
    }
  }, [favorites, sortBy])

  const addFavorite = (movie: Movie) => {
    const newFavorites = [...favorites, movie]
    setFavorites(newFavorites)
    localStorage.setItem(APP_CONFIG.STORAGE_KEYS.FAVORITES, JSON.stringify(newFavorites))
  }

  const removeFavorite = (movieId: number) => {
    const newFavorites = favorites.filter(movie => movie.id !== movieId)
    setFavorites(newFavorites)
    localStorage.setItem(APP_CONFIG.STORAGE_KEYS.FAVORITES, JSON.stringify(newFavorites))
  }

  const isFavorite = (movieId: number) => {
    return favorites.some(movie => movie.id === movieId)
  }

  const toggleFavorite = (movie: Movie) => {
    if (isFavorite(movie.id)) {
      removeFavorite(movie.id)
    } else {
      addFavorite(movie)
    }
  }

  const value = {
    favorites,
    sortedFavorites,
    sortBy,
    setSortBy,
    addFavorite,
    removeFavorite,
    isFavorite,
    toggleFavorite,
  }

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  )
}

export function useFavorites() {
  const context = useContext(FavoritesContext)
  if (context === undefined) {
    throw new Error('useFavorites deve ser usado dentro de um FavoritesProvider')
  }
  return context
}
