import { cn } from "@/lib/utils"

interface CardActionProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode
}

export function CardAction({ icon, className, ...props }: CardActionProps) {
  return (
    <button
      type="button"
      className={cn("absolute top-2 right-2 bg-gray-900 rounded-full p-1 z-20 active:scale-95 hover:opacity-90", className)}
      {...props}
    >
      {icon}
    </button>
  )
}