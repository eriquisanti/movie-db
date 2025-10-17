import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { APP_CONFIG } from "@/config/app-config"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString(APP_CONFIG.DEFAULT_LANGUAGE, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC'
  })
}