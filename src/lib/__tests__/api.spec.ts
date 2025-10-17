// Mock do fetch global
const mockFetch = jest.fn();
global.fetch = mockFetch;

process.env.VITE_TMDB_API_TOKEN = 'test-token-123';

import { apiRequest } from "../api";

describe("Api", () => {
  beforeEach(() => {
    mockFetch.mockClear();
  });

  it("Fazer request à API de filmes com sucesso", async () => {
    const mockResponseData = {
      id: 1,
      title: "Test Movie",
      overview: "Test overview"
    };

    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: jest.fn().mockResolvedValueOnce(mockResponseData),
      status: 200,
      statusText: 'OK'
    });

    const response = await apiRequest(
      "/movie",
      { params: { page: 1 } }
    );

    expect(response).toBeDefined();
  });


  it("Deve tratar erros da API", async () => {
    mockFetch.mockResolvedValueOnce({
      ok: false,
      status: 404,
      statusText: 'Not Found'
    });
    try {
      const response = await apiRequest("/movie", { params: { page: 1 } });
      expect(response).toBeUndefined();
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
});