import * as React from "react";
import classnames from "classnames";

interface OwnProps {
  isMenuOpen: boolean;
}

export function NavbarMenu({ isMenuOpen }: OwnProps): JSX.Element {
  const menuItems = [
    { id: 0, text: "Strona główna", href: "/" },
    { id: 1, text: "Zleć naprawę", href: "/zlec-naprawe" },
    { id: 2, text: "Stan naprawy", href: "/stan-naprawy" },
    { id: 3, text: "O nas", href: "/o-nas" },
    { id: 4, text: "Galeria", href: "/galeria" },
    { id: 5, text: "Kontakt", href: "/kontakt" },
    { id: 6, text: "Pracownik", href: "/pracownik" },
  ];

  return (
    <ul
      className={classnames("navbar-menu", {
        "navbar-menu--open": isMenuOpen === true,
        "navbar-menu--close": isMenuOpen === false,
      })}
    >
      {menuItems.map(({ text, href, id }) => (
        <li key={id} className="navbar-menu__item">
          <a href={href}>{text}</a>
        </li>
      ))}
    </ul>
  );
}
