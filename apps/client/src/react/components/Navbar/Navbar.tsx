import * as React from "react";
import { Logo } from "../Logo/Logo";

export function Navbar(): JSX.Element {
  return (
    <nav className="container navbar">
      <div className="navbar__logo">
        <Logo />
      </div>
      <ul className="navbar__menu">
        <li className="navbar__menu__item mr-3">
          <a href="/">Strona główna</a>
        </li>
        <li className="navbar__menu__item mr-3">
          <a href="/">Zleć naprawę</a>
        </li>
        <li className="navbar__menu__item mr-3">
          <a href="/">Stan naprawy</a>
        </li>
        <li className="navbar__menu__item mr-3">
          <a href="/">O nas</a>
        </li>
        <li className="navbar__menu__item mr-3">
          <a href="/">Galeria</a>
        </li>
        <li className="navbar__menu__item mr-3">
          <a href="/">Kontakt</a>
        </li>
        <li className="navbar__menu__item">
          <a href="/">Pracownik</a>
        </li>
      </ul>
    </nav>
  );
}
