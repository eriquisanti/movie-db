import { ENV_CONFIG } from "@/config/app-config"

type BannerProps = React.ImgHTMLAttributes<HTMLImageElement>

export function Banner({ src, ...props }: BannerProps) {
  return (
    <img
      className="h-full object-cover rounded-2xl"
      src={ENV_CONFIG.TMDB_IMAGE_URL + "/original" + src}
      {...props}
    />
  )
}