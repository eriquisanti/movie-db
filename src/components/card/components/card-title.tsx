interface CardTitleProps {
  children: React.ReactNode
}

export function CardTitle({ children }: CardTitleProps) {
  return (
    <h2 className="text-lg font-semibold text-white">
      {children}
    </h2>
  )
}