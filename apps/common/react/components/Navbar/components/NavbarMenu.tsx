import * as React from "react";
import { NavLink } from "react-router-dom";

import classnames from "classnames";

import { isGivenLocation } from "../../../../utils/functions";

interface OwnProps {
  isMenuOpen: boolean;
  handleMenuKeyboard: (e: React.KeyboardEvent) => void;
  closeMenu: () => void;
}

export function NavbarMenu({
  isMenuOpen,
  handleMenuKeyboard,
  closeMenu,
}: OwnProps): JSX.Element {
  const isEmployee = isGivenLocation("pracownik");

  const menuItems = [
    { id: 0, text: "Strona główna", href: "/" },
    { id: 1, text: "Zleć naprawę", href: "/nowa-naprawa" },
    { id: 2, text: "Stan naprawy", href: "/stan-naprawy" },
    { id: 3, text: "O nas", href: "/o-nas" },
    { id: 4, text: "Galeria", href: "/galeria" },
    { id: 5, text: "Kontakt", href: "/kontakt" },
  ];

  return (
    <ul
      className={classnames("navbar-menu", {
        "navbar-menu--open": isMenuOpen === true,
        "navbar-menu--close": isMenuOpen === false,
      })}
    >
      {!isEmployee && (
        <>
          {menuItems.map(({ text, href, id }) => (
            <li
              role="menuitem"
              onClick={closeMenu}
              key={id}
              onKeyDown={handleMenuKeyboard}
            >
              <NavLink
                className="navbar-menu__link"
                activeClassName="navbar-menu__link--active"
                to={href}
                exact
              >
                {text}
              </NavLink>
            </li>
          ))}
          <li
            role="menuitem"
            onClick={closeMenu}
            onKeyDown={handleMenuKeyboard}
          >
            <a className="navbar-menu__link" href="/pracownik/">
              Pracownik
            </a>
          </li>
        </>
      )}
      {isEmployee && (
        <li role="menuitem" onClick={closeMenu} onKeyDown={handleMenuKeyboard}>
          <a
            className="navbar-menu__link navbar-menu__link--logout"
            href="/pracownik/zaloguj-sie"
          >
            {/* <Icon additionalClasses="mr-2" size="sm" icon="logout" /> */}
            Wyloguj się
          </a>
        </li>
      )}
    </ul>
  );
}
