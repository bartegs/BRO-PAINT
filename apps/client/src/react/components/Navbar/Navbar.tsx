import * as React from "react";
import { Logo } from "../Logo/Logo";
import { NavbarMenu, NavbarToggler } from "./components";

export function Navbar(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <nav className="navbar">
      <div className="container navbar__container">
        <a className="navbar__logo" href="/">
          <Logo />
        </a>
        <NavbarToggler isClicked={isMenuOpen} onClick={toggleMenu} />
        <NavbarMenu isMenuOpen={isMenuOpen} />
      </div>
    </nav>
  );
}
