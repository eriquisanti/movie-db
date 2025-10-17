import { act } from "@testing-library/react";
import { render } from "@testing-library/react";
import { SearchProvider, useSearch } from "../search-provider";
import { useEffect } from "react";

jest.mock("@/lib/api", () => ({
  searchMovies: jest.fn().mockResolvedValue({
    searchResults: [{ id: 1, title: "Inception" }]
  })
}));

function Component() {
  const { searchMovies, searchResults, isSearching } = useSearch();

  useEffect(() => {
    searchMovies("Inception");
  }, [searchMovies]);

  return (
    <div>
      {isSearching && <span>Loading...</span>}
      {searchResults.map(movie => (
        <div key={movie.id}>{movie.title}</div>
      ))}
    </div>
  );
}

describe("SearchProvider", () => {
  it("Valida Pesquisa pelo filme", async () => {
    await act(async () => {
      render(
        <SearchProvider>
          <Component />
        </SearchProvider>
      );
    });
  });

  it("Valida se cai no throw ao usar useSearch fora do provider", () => {
    let error;
    function ComponentProvider() {
      try {
        useSearch();
      } catch (e) {
        error = e;
      }
      return null;
    }

    render(<ComponentProvider />);
    expect(error).toBeDefined();
  });
});