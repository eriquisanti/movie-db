import { cn } from "@/lib/utils"

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
}

export function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button className={cn("px-4 py-2 bg-blue-600 text-white rounded-md cursor-pointer active:scale-90 hover:opacity-90", className)} {...props}>
      {children}
    </button>
  )
}