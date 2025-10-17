import { render } from "@testing-library/react";
import { CardsGrid } from "..";

describe("CardsGrid", () => {
  it("Valida se o componente renderiza", () => {
    render(<CardsGrid>
      <p>Teste</p>
    </CardsGrid>);
  });
});