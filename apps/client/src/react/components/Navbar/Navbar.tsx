import * as React from "react";
import { Logo } from "../Logo/Logo";

export function Navbar(): JSX.Element {
  return (
    <div style={{ background: "white", width: "100%" }}>
      <nav className="container navbar">
        <div className="navbar__logo">
          <Logo />
        </div>
        <ul className="navbar__menu">
          <li className="navbar__item">
            <a href="/">Strona główna</a>
          </li>
          <li className="navbar__item">
            <a href="/">Zleć naprawę</a>
          </li>
          <li className="navbar__item">
            <a href="/">Stan naprawy</a>
          </li>
          <li className="navbar__item">
            <a href="/">O nas</a>
          </li>
          <li className="navbar__item">
            <a href="/">Galeria</a>
          </li>
          <li className="navbar__item">
            <a href="/">Kontakt</a>
          </li>
          <li className="navbar__item">
            <a href="/">Pracownik</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
