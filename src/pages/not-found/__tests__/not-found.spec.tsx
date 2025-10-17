// @ts-nocheck
import { NotFoundPage } from "..";
import { render, screen } from "@testing-library/react";

describe("NotFoundPage", () => {
  it("Renderiza Pagina corretamente", () => {
    render(<NotFoundPage />);
  });
});