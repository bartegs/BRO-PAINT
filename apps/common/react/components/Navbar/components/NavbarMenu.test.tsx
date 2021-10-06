import { render, screen } from "@testing-library/react";
import * as React from "react";
import { MemoryRouter } from "react-router-dom";
import { menuItems, NavbarMenu } from "./NavbarMenu";

describe("NavbarMenu", () => {
  // props mock
  let isMenuOpen = false;
  const closeMenu = () => {
    isMenuOpen = false;
  };
  const handleMenuKeyboard = (e: React.KeyboardEvent) => {
    if (e.code === "Enter" || e.code === "Space") {
      isMenuOpen = !isMenuOpen;
    } else if (e.code === "Escape") {
      isMenuOpen = false;
    }
  };

  it(`should render correctly to the page`, () => {
    const { container } = render(
      <MemoryRouter initialEntries={["/"]}>
        <NavbarMenu
          closeMenu={closeMenu}
          isMenuOpen={isMenuOpen}
          handleMenuKeyboard={handleMenuKeyboard}
        />
      </MemoryRouter>
    );

    expect(container).toBeTruthy();
  });

  it(`should render a ul tag with a list of menu options with a class "navbar-menu"`, () => {
    const { container } = render(
      <MemoryRouter initialEntries={["/"]}>
        <NavbarMenu
          closeMenu={closeMenu}
          isMenuOpen={isMenuOpen}
          handleMenuKeyboard={handleMenuKeyboard}
        />
      </MemoryRouter>
    );

    const menu = container.querySelector("ul.navbar-menu");
    expect(menu).toBeInTheDocument();
  });

  it(`should have a class "navbar-menu--open" when isMenuOpen equals true`, () => {
    isMenuOpen = true;

    const { container } = render(
      <MemoryRouter initialEntries={["/"]}>
        <NavbarMenu
          closeMenu={closeMenu}
          isMenuOpen={isMenuOpen}
          handleMenuKeyboard={handleMenuKeyboard}
        />
      </MemoryRouter>
    );

    const menu = container.querySelector("ul.navbar-menu--open");
    expect(menu).toBeInTheDocument();
  });

  it(`should have a class "navbar-menu--close" when isMenuOpen equals false`, () => {
    isMenuOpen = false;

    const { container } = render(
      <MemoryRouter initialEntries={["/"]}>
        <NavbarMenu
          closeMenu={closeMenu}
          isMenuOpen={isMenuOpen}
          handleMenuKeyboard={handleMenuKeyboard}
        />
      </MemoryRouter>
    );

    const menu = container.querySelector("ul.navbar-menu--close");
    expect(menu).toBeInTheDocument();
  });

  it(`should have the following menu options: Strona główna, Nowe zlecenie, Stan zlecenia, O nas, Galeria, Kontakt, Pracownik`, () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <NavbarMenu
          closeMenu={closeMenu}
          isMenuOpen={isMenuOpen}
          handleMenuKeyboard={handleMenuKeyboard}
        />
      </MemoryRouter>
    );

    menuItems.forEach(({ text }) => {
      const item = screen.getByText(text);

      expect(item).toBeInTheDocument();
    });
  });
});
