import type { ReactNode } from 'react'
import { FavoritesProvider } from './favorites-provider'
import { SearchProvider } from './search-provider'

interface ProvidersProps {
  children: ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return (
    <FavoritesProvider>
      <SearchProvider>
        {children}
      </SearchProvider>
    </FavoritesProvider>
  )
}

export { useFavorites } from './favorites-provider'
export { useSearch } from './search-provider'
