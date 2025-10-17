import { act, render, screen } from "@testing-library/react";
import { FavoritesProvider, useFavorites } from "../favorites-provider";
import { SortOption } from "@/types/sorting";
import { mockMovies } from "@/__mocks__/api";

const mockLocalStorage = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn()
};

Object.defineProperty(window, 'localStorage', {
  value: mockLocalStorage,
  writable: true
});

function Component() {
  const { setSortBy, sortedFavorites, removeFavorite, toggleFavorite } = useFavorites();

  return (
    <div>
      <button data-testid="button-toggle" onClick={() => toggleFavorite(mockMovies[0])}>Toggle Favorite</button>
      <button data-testid="button-remove" onClick={() => removeFavorite(mockMovies[0].id)}>Remove Favorite</button>
      <select data-testid="select" onChange={(e) => setSortBy(e.target.value as SortOption)}>
        <option value="title-a-z">A-Z</option>
        <option value="title-z-a">Z-A</option>
        <option value="rating">Avaliação</option>
      </select>
      <div>
        {sortedFavorites.map(movie => (
          <div key={movie.id} data-testid="movies">{movie.title}</div>
        ))}
      </div>
    </div>
  );
}

describe("FavoritesProvider", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockLocalStorage.getItem.mockImplementation((key) => {
      if (key === '@moviedb-favorites') {
        return JSON.stringify(mockMovies);
      }
      return null;
    });
  });

  it("Valida se está ordenando de A-Z", async () => {
    await act(async () => {
      render(
        <FavoritesProvider>
          <Component />
        </FavoritesProvider>
      );
    });

    const select = screen.getByTestId('select') as HTMLSelectElement;

    await act(async () => {
      select.value = 'title-a-z';
      select.dispatchEvent(new Event('change'));
    });
  });

  it("Valida se está ordenando de Z-A", async () => {
    await act(async () => {
      render(
        <FavoritesProvider>
          <Component />
        </FavoritesProvider>
      );
    });

    const select = screen.getByTestId('select') as HTMLSelectElement;
    await act(async () => {
      select.value = 'title-z-a';
      select.dispatchEvent(new Event('change'));
    });
  });
  it("Valida se está ordenando por Rating", async () => {
    await act(async () => {
      render(
        <FavoritesProvider>
          <Component />
        </FavoritesProvider>
      );
    });
    const select = screen.getByTestId('select') as HTMLSelectElement;
    await act(async () => {
      select.value = 'rating';
      select.dispatchEvent(new Event('change'));
    });
  });

  it("Remove um filme dos favoritos", async () => {
    await act(async () => {
      render(
        <FavoritesProvider>
          <Component />
        </FavoritesProvider>
      );
    });

    const removeButton = screen.getByTestId('button-remove');
    await act(async () => {
      removeButton.click();
    });
  });

  it("Toggle dos favoritos", async () => {
    await act(async () => {
      render(
        <FavoritesProvider>
          <Component />
        </FavoritesProvider>
      );
    });

    const removeButton = screen.getByTestId('button-toggle');
    await act(async () => {
      removeButton.click();
    });
  });

  it("Valida se cai no throw ao usar useFavorites fora do provider", () => {
    let error;
    function ComponentProvider() {
      try {
        useFavorites();
      } catch (e) {
        error = e;
      }
      return null;
    }

    render(<ComponentProvider />);
    expect(error).toBeDefined();
  });
});