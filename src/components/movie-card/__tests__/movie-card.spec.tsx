import { mockMovies } from "@/__mocks__/api";
import { MovieCard } from "..";
import { fireEvent, render, screen } from "@testing-library/react";
import { FavoritesProvider } from "@/providers/favorites-provider";
import type { Movie } from "@/types/movie-list";
import { act } from "react";

const movie = mockMovies[0];

const MovieCardWithProvider = ({ movie }: { movie: Movie }) => (
  <FavoritesProvider>
    <MovieCard movie={movie} />
  </FavoritesProvider>
);

describe("MovieCard", () => {
  it("Renderiza titulo do filme corretamente", () => {
    render(<MovieCardWithProvider movie={movie} />);
  });

  it("Adiciona ou remove filmes dos favoritos", async () => {
    render(<MovieCardWithProvider movie={movie} />);
    const addButton = screen.getByRole("button");
    await act(async () => {
      fireEvent.click(addButton);
    });
  });
});