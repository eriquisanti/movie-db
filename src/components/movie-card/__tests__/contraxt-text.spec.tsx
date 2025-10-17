import { render } from "@testing-library/react";
import { ContrastText } from "../components/contrast-text";


describe("MovieCard", () => {
  it("Renderiza titulo do filme corretamente", () => {
    const text = "filme teste";
    const contrast = "teste";
    render(<ContrastText contrast={contrast} text={text} />);
  });
});