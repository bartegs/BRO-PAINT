import * as React from "react";
import { Logo } from "../Logo/Logo";
import { NavbarMenu, NavbarToggler } from "./components";

export function Navbar(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <nav className="container navbar">
      <a className="navbar__logo" href="/">
        <Logo />
      </a>
      <NavbarToggler isMenuOpen={isMenuOpen} onClick={toggleMenu} />
      <NavbarMenu isMenuOpen={isMenuOpen} />
    </nav>
  );
}
