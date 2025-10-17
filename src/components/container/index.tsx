
interface ContainerProps {
  children?: React.ReactNode
}

export function Container({ children }: ContainerProps) {
  return (
    <div className="w-[95%] mx-auto h-full">
      {children}
    </div>
  )
}