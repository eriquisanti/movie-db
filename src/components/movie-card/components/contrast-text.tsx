interface ContrastTextProps {
  text: string
  contrast?: string
  className?: string
}

export function ContrastText({ text, contrast, className }: ContrastTextProps) {
  if (!contrast?.trim()) {
    return <span className={className}>{text}</span>
  }

  const escapedContrast = contrast.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const parts = text.split(new RegExp(`(${escapedContrast})`, 'gi'))

  return (
    <span className={className}>
      {parts.map((part, index) => (
        part.toLowerCase() === contrast.toLowerCase() ? (
          <span key={index} className="bg-yellow-400 text-black px-1 rounded">
            {part}
          </span>
        ) : (
          part
        )
      ))}
    </span>
  )
}