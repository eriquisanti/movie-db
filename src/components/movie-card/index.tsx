import { memo } from 'react'
import { CardAction, CardContent, CardImage, Card, CardTitle } from "@/components/card"
import { Flag } from "@/components/flag"
import { Icon } from "@/components/icon"
import { useFavorites } from "@/providers"
import { ContrastText } from "./components/contrast-text"
import type { Movie } from "@/types/movie-list"

interface MovieCardProps {
  movie: Movie
  contrastText?: string
}

export const MovieCard = memo(function MovieCard({ movie, contrastText }: MovieCardProps) {
  const { toggleFavorite, isFavorite } = useFavorites()

  const isFavorited = isFavorite(movie.id)

  function handleToggleFavorite() {
    toggleFavorite(movie)
  }

  return (
    <Card cardId={movie.id}>
      <CardImage src={movie.poster_path} />
      <CardAction
        icon={<Icon name="heart" fill={isFavorited ? "red" : "none"} strokeWidth={isFavorited ? 0 : 1} />}
        onClick={handleToggleFavorite}
      />
      <CardContent>
        <CardTitle>
          <ContrastText text={movie.title} contrast={contrastText} />
        </CardTitle>
        <Flag>
          {movie.vote_average}
        </Flag>
      </CardContent>
    </Card>
  )
})