import { useEffect } from 'react'
import { APP_CONFIG } from '@/config/app-config'

interface UseInfiniteScrollOptions {
  hasMore: boolean
  isLoading: boolean
  onLoadMore: () => void
  threshold?: number
}

export function useInfiniteScroll({ 
  hasMore, 
  isLoading, 
  onLoadMore, 
  threshold = APP_CONFIG.SCROLL_THRESHOLD 
}: UseInfiniteScrollOptions) {
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - threshold && hasMore && !isLoading) {
        onLoadMore()
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [onLoadMore, isLoading, hasMore, threshold])
}