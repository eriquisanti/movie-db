import { render, fireEvent } from "@testing-library/react";
import { Button } from "..";

describe("Button", () => {
  it("Valida se o botão é clicavel", () => {
    const { getByRole } = render(<Button />);
    const button = getByRole("button");
    fireEvent.click(button);
    expect(button).toBeEnabled();
  });
});