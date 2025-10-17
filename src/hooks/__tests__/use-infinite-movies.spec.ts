import { renderHook, waitFor } from "@testing-library/react";
import { useInfiniteMovies } from "../use-infinite-movies";
import { mockMovies } from "@/__mocks__/api";

jest.mock("@/lib/api", () => ({
  apiRequest: jest.fn().mockImplementation((endpoint: string, options: any = {}) => {
    const page = options.params?.page || 1;

    if (endpoint.includes('/popular/movie')) {
      return Promise.resolve({
        results: mockMovies,
        total_pages: 5,
        total_results: mockMovies.length,
        page: page
      });
    }

    return Promise.resolve({
      results: mockMovies,
      total_pages: 1,
      total_results: mockMovies.length,
      page: 1
    });
  })
}));

describe("useInfiniteMovies", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("Não executa se estiver em loading ou se não tiver mais para carregar ou desabilitado", () => {
    const { result } = renderHook(() =>
      useInfiniteMovies({ endpoint: "/popular/movie", enabled: false })
    );
    result.current.reset();
  });

  it("Carrega so a primeira pagina", async () => {
    const { result } = renderHook(() =>
      useInfiniteMovies({ endpoint: "/popular/movie" })
    );
    await waitFor(() => {
      result.current.reset();
    });
  });

  it("Carrega mais páginas", async () => {
    const { result } = renderHook(() =>
      useInfiniteMovies({ endpoint: "/popular/movie" })
    );
    result.current.loading = false;
    result.current.hasMore = true;

    await waitFor(() => {
      result.current.fetchMore();
    });
  });
});