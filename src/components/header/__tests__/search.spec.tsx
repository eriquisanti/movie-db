import { render, screen, fireEvent } from "@testing-library/react";
import { SearchProvider } from "@/providers/search-provider";
import { Search } from "../components/search";

// Mock do useNavigate
const mockNavigate = jest.fn();
jest.mock('react-router', () => ({
  ...jest.requireActual('react-router'),
  useNavigate: () => mockNavigate,
}));

function SearchWithProvider() {
  return (
    <SearchProvider>
      <Search />
    </SearchProvider>
  );
}

describe("Search", () => {
  beforeEach(() => {
    mockNavigate.mockClear();
  });

  it("Renderiza o componente corretamente", () => {
    render(<SearchWithProvider />);
  });

  it("navega para página de busca quando aperta Enter", () => {
    render(<SearchWithProvider />);
    const input = screen.getByRole('textbox');

    fireEvent.change(input, { target: { value: "Matrix" } });
    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });
    expect(mockNavigate).toHaveBeenCalledWith("/search?q=Matrix");
  });

  it("não navega se o input estiver vazio", () => {
    render(<SearchWithProvider />);
    const input = screen.getByRole('textbox');

    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });
    expect(mockNavigate).not.toHaveBeenCalled();
  });
});