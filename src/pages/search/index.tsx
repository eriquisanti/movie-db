import { useEffect } from "react";
import { useSearchParams } from "react-router";
import { CardsGrid } from "@/components/cards-grid";
import { Container } from "@/components/container";
import { MovieCard } from "@/components/movie-card";
import { Subheader } from "@/components/subheader";
import { useSearch } from "@/providers";
import { useInfiniteScroll } from "@/hooks/use-infinite-scroll";
import type { Movie } from "@/types/movie-list";
import { CardLoading } from "@/components/card-loading";

export function SearchPage() {
  const [searchParams] = useSearchParams()
  const { searchResults, isSearching, totalResults, searchMovies, hasMore, fetchMore } = useSearch()

  const queryUrl = searchParams.get('q')

  useEffect(() => {
    if (queryUrl) {
      searchMovies(queryUrl)
    }
  }, [queryUrl, searchMovies])

  useInfiniteScroll({
    hasMore,
    isLoading: isSearching,
    onLoadMore: fetchMore
  })

  if (isSearching) {
    return (
      <>
        <Subheader>
          <div className="flex flex-col gap-4 items-center md:items-start">
            <div className="animate-pulse w-80 h-10 bg-gray-700 rounded"></div>
            <div className="animate-pulse w-52 h-6 bg-gray-700 rounded"></div>
          </div>
        </Subheader>
        <Container>
          <CardsGrid>
            {Array.from({ length: 20 }).map((_, index) => (
              <CardLoading key={index} />
            ))}
          </CardsGrid>
        </Container>
      </>
    )
  }

  if (!queryUrl) {
    return (
      <div>
        <Container>
          <div className="text-center text-gray-400 py-8">
            Digite algo na barra de pesquisa para começar
          </div>
        </Container>
      </div>
    )
  }

  return (
    <div>
      <Subheader>
        <div className="flex flex-col items-center md:items-start">
          <div className="flex gap-1 font-bold text text-xl">
            <h2 className="text-white">Resultados para: </h2>
            <p className="text-orange-400">"{queryUrl}"</p>
          </div>
          <p className="text-gray-500">
            {totalResults > 0
              ? `Encontrados ${totalResults} filme${totalResults > 1 ? 's' : ''}`
              : 'Nenhum filme encontrado'
            }
          </p>
        </div>
      </Subheader>
      <Container>
        <CardsGrid>
          {
            searchResults?.map((movie: Movie, index: number) => (
              <MovieCard key={movie.id + "_" + index} movie={movie} contrastText={queryUrl} />
            ))
          }
        </CardsGrid>
      </Container>
    </div>
  )
}