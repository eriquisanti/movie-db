import { Route, Routes } from "react-router";
import { lazy } from "react";

const HomePage = lazy(() => import('./pages/home').then(module => ({ default: module.HomePage })))
const MoviePage = lazy(() => import('./pages/movie').then(module => ({ default: module.MoviePage })))
const FavoritesPage = lazy(() => import('./pages/favorites').then(module => ({ default: module.FavoritesPage })))
const SearchPage = lazy(() => import('./pages/search').then(module => ({ default: module.SearchPage })))
const NotFoundPage = lazy(() => import('./pages/not-found').then(module => ({ default: module.NotFoundPage })))

export function AppRoutes() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/movie/:id" element={<MoviePage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}