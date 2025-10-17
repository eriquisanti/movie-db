interface CardContentProps {
  children?: React.ReactNode
}

export function CardContent({ children }: CardContentProps) {
  return (
    <div className="p-4 flex flex-col gap-2">
      {children}
    </div>
  )
}