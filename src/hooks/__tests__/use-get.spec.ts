import { renderHook, waitFor } from "@testing-library/react";
import { useGet } from "../use-get";
import { mockMovieDetails } from "@/__mocks__/api";
import { error } from "console";

interface GetParameters {
  endpoint: string;
  params?: { [key: string]: any };
  cache: 'no-cache' | 'reload' | 'force-cache' | 'only-if-cached';
}

jest.mock("@/lib/api", () => ({
  apiRequest: jest.fn().mockImplementation((endpoint: string, options: any = {}) => {
    const page = options.params?.page || 1;

    try {
      if (endpoint.includes('/movie/details')) {
        return Promise.resolve({
          results: mockMovieDetails,
        });
      } else {
        throw new Error("Endpoint inválido");
      }
    } catch (error) {
      return Promise.reject(error);
    }
  })
}));
describe("useGet", () => {

  it("Teste de get endpoint", async () => {
    const { result } = renderHook(() =>
      useGet<GetParameters>("/movie/details", { id: 1 }, 'no-cache')
    );
    await waitFor(() => {
      expect(result.current.data).toBeDefined();
      expect(result.current.loading).toBe(false);
      expect(result.current.error).toBeNull();
    });
  });

  it("Teste de get endpoint com erro", async () => {
    const { result } = renderHook(() =>
      useGet<GetParameters>("/movie/invalid-endpoint", { id: 1 }, 'no-cache')
    );
    await waitFor(() => {
      expect(result.current.error).toBeDefined();
    });
  });
});