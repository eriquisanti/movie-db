import { formatDate } from "../utils";

describe("Utils", () => {
  it("Deve executar uma função de formatar data corretamente", () => {
    const date = formatDate("2025-10-17");
    console.log(date);
    expect(date).toBe("17 de outubro de 2025");
  });
});