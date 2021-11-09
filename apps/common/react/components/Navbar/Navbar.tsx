import * as React from "react";

import { isGivenLocation } from "../../../utils/functions";

import { NavbarMenu, NavbarToggler, NavbarMenuEmployee } from "./components";
import { Logo } from "../Logo";

export function Navbar(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const isEmployee = isGivenLocation("pracownik");

  const toggleMenu = (e: React.MouseEvent) => {
    setIsMenuOpen((prevState) => !prevState);
    e.stopPropagation();
  };

  const closeMenu = () => setIsMenuOpen(false);

  const handleMenuKeyboard = (e: React.KeyboardEvent) => {
    if (e.code === "Enter" || e.code === "Space") {
      setIsMenuOpen((prevState) => !prevState);
    } else if (e.code === "Escape") {
      setIsMenuOpen(false);
    }
  };

  return (
    <nav role="presentation" onClick={closeMenu} className="navbar">
      <div className="container navbar__container">
        <a className="navbar__logo" href="/">
          <Logo />
        </a>
        {isEmployee ? (
          <NavbarMenuEmployee />
        ) : (
          <>
            <NavbarToggler
              handleMenuKeyboard={handleMenuKeyboard}
              isClicked={isMenuOpen}
              onClick={toggleMenu}
            />
            <NavbarMenu
              isMenuOpen={isMenuOpen}
              handleMenuKeyboard={handleMenuKeyboard}
              closeMenu={closeMenu}
            />
          </>
        )}
      </div>
    </nav>
  );
}
