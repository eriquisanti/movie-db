export function Error() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <h1 className="text-6xl font-bold text-red-600 mb-4">Error 500</h1>
      <p className="text-xl text-gray-400">Erro ao carregar os dados. Tente novamente mais tarde.</p>
    </div>
  )
}