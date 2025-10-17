import { renderHook, waitFor } from "@testing-library/react";
import { useInfiniteScroll } from "../use-infinite-scroll";

describe("useInfiniteScroll", () => {
  it("Teste de scroll", async () => {
    window.innerHeight = 800;
    window.scrollY = 0;
    Object.defineProperty(document.body, 'offsetHeight', { value: 2000, configurable: true });

    renderHook(() =>
      useInfiniteScroll({
        hasMore: true,
        isLoading: false,
        onLoadMore: jest.fn(),
        threshold: 300,
      })
    );

    await waitFor(() => {
      window.scrollY = 1000;
      window.dispatchEvent(new Event('scroll'));
    });
  });
});