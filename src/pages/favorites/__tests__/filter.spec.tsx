import { FavoritesProvider } from "@/providers/favorites-provider";
import { Filter } from "../components/filter";
import { render } from "@testing-library/react";

function Component() {

  return (
    <div>
      <Filter />
    </div>
  );
}

describe("Filter Favorites", () => {
  it("filtra filmes", async () => {
    render(
      <FavoritesProvider>
        <Component />
      </FavoritesProvider>
    );
  });
});