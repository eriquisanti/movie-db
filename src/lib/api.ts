import { ENV_CONFIG } from "@/config/app-config"

const BASE_URL = import.meta.env.DEV ? "/api" : ENV_CONFIG.TMDB_API_URL
const API_KEY = ENV_CONFIG.TMDB_API_TOKEN

export interface RequestOptions extends RequestInit {
  params?: Record<string, string | number>
  cache?: RequestCache
}

export async function apiRequest<T>(
  endpoint: string,
  options: RequestOptions = {}
): Promise<T> {
  const { params, headers, cache = 'default', ...rest } = options

  let url = BASE_URL + endpoint

  if (params) {
    const queryString = new URLSearchParams()
    Object.entries(params).forEach(([key, value]) => {
      queryString.append(key, String(value))
    })
    url = url.concat("?" + queryString.toString())
  }


  const res = await fetch(url, {
    ...rest,
    headers: {
      'Content-Type': 'application/json',
      Authorization: "Bearer " + API_KEY,
      ...headers,
    },
    cache,
  })

  if (!res.ok) {
    throw new Error(`Erro ao buscar: ${res.status} ${res.statusText}`)
  }

  return res.json()
}