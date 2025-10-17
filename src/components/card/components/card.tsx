import { cn } from "@/lib/utils"
import { Link } from "react-router"

interface CardRootProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  cardId: string | number
}

export function Card({ children, cardId, className, ...props }: CardRootProps) {
  return (
    <div className={cn("bg-gray-800 rounded-md w-full max-w-72 overflow-hidden relative", className)} {...props}>
      <Link to={`/movie/${cardId}`} className="absolute inset-0" ></Link>
      {children}
    </div>
  )
}