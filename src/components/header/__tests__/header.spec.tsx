import { render, screen } from "@testing-library/react";
import { Header } from "..";
import { SearchProvider } from "@/providers/search-provider";

function HeaderProvider() {
  return (
    <SearchProvider>
      <Header />
    </SearchProvider>
  );
}

describe("Header", () => {
  it("Renderiza o componente corretamente", () => {
    render(<HeaderProvider />);
    expect(screen.getByRole("banner")).toBeInTheDocument();
  });

  it("Verifica se o título está correto", () => {
    render(<HeaderProvider />);
    const titleElement = screen.getByText(/MovieDB/i);
    expect(titleElement).toBeInTheDocument();
  });
});