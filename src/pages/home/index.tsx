import { CardLoading } from "@/components/card-loading";
import { CardsGrid } from "@/components/cards-grid";
import { Container } from "@/components/container";
import { MovieCard } from "@/components/movie-card";
import { useInfiniteMovies } from "@/hooks/use-infinite-movies";
import { useInfiniteScroll } from "@/hooks/use-infinite-scroll";
import type { Movie } from "@/types/movie-list";
import { useEffect } from "react";
import { APP_CONFIG } from "@/config/app-config";
import { Error } from "@/components/error";

export function HomePage() {
  const { movies, loading, error, fetchMore, hasMore, reset } = useInfiniteMovies({
    endpoint: '/movie/popular',
    params: { language: APP_CONFIG.DEFAULT_LANGUAGE }
  });

  useEffect(() => {
    reset()
  }, [reset])

  useInfiniteScroll({
    hasMore,
    isLoading: loading,
    onLoadMore: fetchMore
  })

  if (loading) {
    return (
      <Container>
        <CardsGrid>
          {Array.from({ length: 20 }).map((_, index) => (
            <CardLoading key={index} />
          ))}
        </CardsGrid>
      </Container>
    )
  }

  if (error) return <Error />

  return (
    <Container>
      <CardsGrid>
        {
          movies?.map((movie: Movie, index: number) => (
            <MovieCard key={movie.id + "_" + index} movie={movie} />
          ))
        }
      </CardsGrid>
    </Container>
  )
}