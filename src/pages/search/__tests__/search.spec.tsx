import { render } from "@testing-library/react";
import { SearchPage } from "../index";
import { SearchProvider, useSearch } from "@/providers/search-provider";

function Componet() {
  const { searchResults, isSearching } = useSearch();

  if (isSearching) {
    return <div>Loading...</div>;
  }

  return (
    <div></div>
  )
}


describe("SearchPage", () => {
  it("Renderiza a página de Search", () => {
    window.history.pushState({}, "Search Page", "/search?q=Matrix");
    render(
      <SearchProvider>
        <SearchPage />
      </SearchProvider>
    );
  });

  it("Exibe o loading ao buscar filmes", async () => {
    window.history.pushState({}, "Search Page", "/search?q=Matrix");
    render(
      <SearchProvider>
        <Componet />
      </SearchProvider>
    );
  });
});