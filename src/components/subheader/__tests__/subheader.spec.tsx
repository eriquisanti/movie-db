// @ts-nocheck
import { Subheader } from "..";
import { render, screen } from "@testing-library/react";

describe("Subheader", () => {
  it("Renderiza componente corretamente", () => {
    render(<Subheader />);
  });
});