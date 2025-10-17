import { render, screen } from "@testing-library/react";
import { FavoritesNotFound } from "../components/favorites-not-found";
import { bu } from "react-router/dist/development/routeModules-D5iJ6JYT";

describe("FavoritesNotFound", () => {
  it("RenderizaComponente", () => {
    render(
      <FavoritesNotFound />
    );
  });

  it("Redireciona para a home ao clicar no botão", () => {
    render(
      <FavoritesNotFound />
    );
    const button = screen.getByRole("button");
    button.click();
  });
});