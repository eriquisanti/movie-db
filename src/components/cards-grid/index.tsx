
interface CardsGridProps {
  children: React.ReactNode
}

export function CardsGrid({ children }: CardsGridProps) {
  return (<div className="grid grid-cols-1 gap-6 justify-items-center  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 sm:justify-items-start">

    {children}
  </div>
  )
}