import { render } from "@testing-library/react";
import { CardImage } from "../components/card-image";

describe("CardImage", () => {
  it("Validar se carrega o componente quando o src não é passado", () => {
    render(<CardImage src="" />);
  });
});