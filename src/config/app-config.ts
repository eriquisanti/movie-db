
export const APP_CONFIG = {
  DEFAULT_LANGUAGE: 'pt-BR',
  SCROLL_THRESHOLD: 300,
  DEFAULT_PAGE_SIZE: 20,

  STORAGE_KEYS: {
    FAVORITES: '@moviedb-favorites',
    LANGUAGE: '@moviedb-language',
  }
} as const

export const ENV_CONFIG = {
  TMDB_API_TOKEN: import.meta.env.VITE_TMDB_API_TOKEN,
  TMDB_API_URL: import.meta.env.VITE_TMDB_API_URL,
  TMDB_IMAGE_URL: import.meta.env.VITE_TMDB_IMAGE_URL,
} as const

export type Language = typeof APP_CONFIG.DEFAULT_LANGUAGE
export type StorageKey = typeof APP_CONFIG.STORAGE_KEYS[keyof typeof APP_CONFIG.STORAGE_KEYS]