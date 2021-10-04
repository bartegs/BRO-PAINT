import { render } from "@testing-library/react";
import * as React from "react";
import { MemoryRouter } from "react-router-dom";
import { Navbar } from "./Navbar";

describe("Navbar", () => {
  it(`should render correctly to the page`, () => {
    const { container } = render(
      <MemoryRouter initialEntries={["/"]}>
        <Navbar />
      </MemoryRouter>
    );

    expect(container).toBeTruthy();
  });

  it(`should have "navbar" class`, () => {
    const { container } = render(
      <MemoryRouter initialEntries={["/"]}>
        <Navbar />
      </MemoryRouter>
    );

    expect(container.firstChild).toHaveClass("navbar");
  });

  it(`should render an anchor tag with a class "navbar__logo"`, () => {
    const { container } = render(
      <MemoryRouter initialEntries={["/"]}>
        <Navbar />
      </MemoryRouter>
    );

    const logo = container.querySelector("a.navbar__logo");
    expect(logo).toBeInTheDocument();
  });

  it(`should render a ul tag with a list of menu options with a class "navbar-menu"`, () => {
    const { container } = render(
      <MemoryRouter initialEntries={["/"]}>
        <Navbar />
      </MemoryRouter>
    );

    const menu = container.querySelector("ul.navbar-menu");
    expect(menu).toBeInTheDocument();
  });

  it(`should render a div tag with a class "navbar-toggler"`, () => {
    const { container } = render(
      <MemoryRouter initialEntries={["/"]}>
        <Navbar />
      </MemoryRouter>
    );

    const toggler = container.querySelector("div.navbar-toggler");
    expect(toggler).toBeInTheDocument();
  });
});
