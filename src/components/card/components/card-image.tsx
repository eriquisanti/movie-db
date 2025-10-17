import { ENV_CONFIG } from "@/config/app-config"
import { cn } from "@/lib/utils"

type CardImageProps = React.ImgHTMLAttributes<HTMLImageElement>

export function CardImage({ className, src, ...props }: CardImageProps) {
  if (!src) {
    return (
      <div className="w-full h-96 bg-gradient-to-tl from-gray-600 to-gray-800 rounded-t-lg flex items-center justify-center">
        <span className="text-gray-400">Poster do Filme</span>
      </div>
    )
  }
  return (
    <img
      src={ENV_CONFIG.TMDB_IMAGE_URL + src}
      className={cn("w-full h-96 cover", className)}
      {...props}
    />
  )
}