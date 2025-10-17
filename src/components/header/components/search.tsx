import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useSearch } from '@/providers'

export function Search() {
  const navigate = useNavigate()
  const { searchQuery } = useSearch()
  const [inputValue, setInputValue] = useState(searchQuery)

  useEffect(() => {
    setInputValue(searchQuery)
  }, [searchQuery])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputValue.trim()) return

    navigate(`/search?q=${inputValue.trim()}`)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleSearch = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit(e as any)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full h-full">
      <input
        type="text"
        placeholder="Buscar filmes"
        className="w-full h-full rounded-full p-5 bg-gray-700 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleSearch}
      />
    </form>
  )
}