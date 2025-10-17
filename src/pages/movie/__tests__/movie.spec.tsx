import { FavoritesProvider } from "@/providers/favorites-provider";
import { render } from "@testing-library/react";
import { MoviePage } from "../index";


describe("MoviePage", () => {
  it("Renderiza a página de filme", () => {
    window.history.pushState({}, "Movie Page", "/movie/1");
    render(
      <FavoritesProvider>
        <MoviePage />
      </FavoritesProvider>
    );
  });
});