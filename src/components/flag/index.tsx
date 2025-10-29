import { cn } from "@/lib/utils"

interface FlagProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
}

export function Flag({ children, className }: FlagProps) {
  children = Number(children) ? Number(children).toFixed(1) : children;
  return (
    <span className={cn("bg-orange-400 text-gray-900 text-xs/tight font-bold px-2 py-1 rounded-3xl w-max", className)}>
      {children}
    </span>
  )
}