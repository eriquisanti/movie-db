import { render } from "@testing-library/react";
import { Error } from "..";

describe("Error", () => {
  it("Renderiza o componente corretamente", () => {
    render(
      <Error />
    );
  });
});