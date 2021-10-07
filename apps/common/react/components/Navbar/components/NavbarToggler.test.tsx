import { render } from "@testing-library/react";
import * as React from "react";
import { MemoryRouter } from "react-router-dom";
import { NavbarToggler } from "./NavbarToggler";

describe("NavbarMenu", () => {
  // props mock
  let isMenuOpen = false;
  const handleMenuKeyboard = (e: React.KeyboardEvent) => {
    if (e.code === "Enter" || e.code === "Space") {
      isMenuOpen = !isMenuOpen;
    } else if (e.code === "Escape") {
      isMenuOpen = false;
    }
  };
  const toggleMenu = (e: React.MouseEvent) => {
    isMenuOpen = !isMenuOpen;
    e.stopPropagation();
  };

  it(`should render correctly to the page`, () => {
    const { container } = render(
      <MemoryRouter initialEntries={["/"]}>
        <NavbarToggler
          onClick={toggleMenu}
          isClicked={isMenuOpen}
          handleMenuKeyboard={handleMenuKeyboard}
        />
      </MemoryRouter>
    );

    expect(container).toBeTruthy();
  });

  it(`should render a div tag with a class "navbar-toggler"`, () => {
    const { container } = render(
      <MemoryRouter initialEntries={["/"]}>
        <NavbarToggler
          onClick={toggleMenu}
          isClicked={isMenuOpen}
          handleMenuKeyboard={handleMenuKeyboard}
        />
      </MemoryRouter>
    );

    const toggler = container.querySelector("div.navbar-toggler");
    expect(toggler).toBeInTheDocument();
  });

  it(`should have a div containg the toggler with a class "navbar-toggler--close" when isMenuOpen equals true`, () => {
    isMenuOpen = true;

    const { container } = render(
      <MemoryRouter initialEntries={["/"]}>
        <NavbarToggler
          onClick={toggleMenu}
          isClicked={isMenuOpen}
          handleMenuKeyboard={handleMenuKeyboard}
        />
      </MemoryRouter>
    );

    const closedToggler = container.querySelector("div.navbar-toggler--close");
    expect(closedToggler).toBeInTheDocument();
  });

  it(`shouldn have a div containg the toggler with a class "navbar-toggler" but without "navbar-toggler--close" when isMenuOpen equals false`, () => {
    isMenuOpen = false;

    const { container } = render(
      <MemoryRouter initialEntries={["/"]}>
        <NavbarToggler
          onClick={toggleMenu}
          isClicked={isMenuOpen}
          handleMenuKeyboard={handleMenuKeyboard}
        />
      </MemoryRouter>
    );

    const closedToggler = container.querySelector("div.navbar-toggler--close");
    expect(closedToggler).not.toBeInTheDocument();

    const toggler = container.querySelector("div.navbar-toggler");
    expect(toggler).toBeInTheDocument();
  });

  it(`should render a div tag with a class "navbar-toggler__bar"`, () => {
    const { container } = render(
      <MemoryRouter initialEntries={["/"]}>
        <NavbarToggler
          onClick={toggleMenu}
          isClicked={isMenuOpen}
          handleMenuKeyboard={handleMenuKeyboard}
        />
      </MemoryRouter>
    );

    const togglerBar = container.querySelector("div.navbar-toggler__bar");
    expect(togglerBar).toBeInTheDocument();
  });
});
