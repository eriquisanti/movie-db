import { render, screen } from "@testing-library/react";
import { Container } from "..";

describe("Container", () => {
  it("Renderiza o container com children corretamente", () => {
    render(
      <Container>
        <p>Children teste</p>
      </Container>
    );
  });
});