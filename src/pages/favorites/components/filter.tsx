import { useFavorites } from '@/providers';
import type { SortOption } from '@/types/sorting';

export function Filter() {

  const { sortBy, setSortBy } = useFavorites();

  function handleSortChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setSortBy(e.target.value as SortOption);
  }

  return (
    <div className="flex flex-col items-center md:items-start">
      <div className="mb-4">
        <h2 className="text-white text-2xl font-bold">
          Meus Filmes Favoritos
        </h2>
      </div>
      <div className="flex gap-1 items-center">
        <p className="text-gray-500">Ordernar por:</p>
        <select
          className="bg-gray-800 text-white p-1 rounded"
          value={sortBy}
          onChange={handleSortChange}
        >
          <option value="title-a-z">Título (A-Z)</option>
          <option value="title-z-a">Título (Z-A)</option>
          <option value="rating">Melhor Avaliação</option>
        </select>
      </div>
    </div>
  )
}

export type { SortOption };