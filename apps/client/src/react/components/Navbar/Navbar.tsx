import * as React from "react";
import { Logo } from "../Logo/Logo";
import { NavbarMenu, NavbarToggler } from "./components";

export function Navbar(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

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
      </div>
    </nav>
  );
}
