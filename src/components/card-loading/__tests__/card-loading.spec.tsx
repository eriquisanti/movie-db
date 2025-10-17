import { render, fireEvent } from "@testing-library/react";
import { CardLoading } from "..";

describe("CardLoading", () => {
  it("Valida se o loading do card é executado", () => {
    render(<CardLoading />);
  });
});