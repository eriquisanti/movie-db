import { CardAction, CardContent, CardImage, Card, CardTitle } from "@/components/card";
import { CardsGrid } from "@/components/cards-grid";
import { Container } from "@/components/container";
import { Flag } from "@/components/flag";
import { Icon } from "@/components/icon";
import { Subheader } from "@/components/subheader";
import { useFavorites } from "@/providers";
import type { Movie } from "@/types/movie-list";
import { FavoritesNotFound } from "./components/favorites-not-found";
import { Filter } from "./components/filter";

export function FavoritesPage() {
  const { sortedFavorites, removeFavorite } = useFavorites()

  function handleRemoveFavorite(id: number) {
    if (!id) return;
    removeFavorite(id);
  }

  if (!sortedFavorites?.length) {
    return (
      <Container>
        <div className="flex justify-center w-full">
          <FavoritesNotFound />
        </div>
      </Container>
    )
  }

  return (
    <div>
      <Subheader>
        <Filter />
      </Subheader>
      <Container>
        <CardsGrid>
          {
            sortedFavorites.map((movie: Movie, index: number) => {
              return (
                <Card cardId={movie.id} key={movie.id + "_" + index}>
                  <CardImage src={movie.poster_path} />
                  <CardAction
                    icon={<Icon name="trash-2" />}
                    onClick={() => handleRemoveFavorite(movie.id)}
                  />
                  <CardContent>
                    <CardTitle>{movie.title}</CardTitle>
                    <Flag>
                      {movie.vote_average}
                    </Flag>
                  </CardContent>
                </Card>
              );
            })
          }
        </CardsGrid>
      </Container>
    </div>
  )
}