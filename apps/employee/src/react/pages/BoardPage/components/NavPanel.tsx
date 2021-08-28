import * as React from "react";
import { NavLink } from "react-router-dom";

import { Icon, IconType } from "../../../../../../common/react/Icon";

interface MenuItemType {
  id: number;
  text: string;
  href: string;
  icon: IconType;
}
const menuItems: MenuItemType[] = [
  { id: 0, text: "Nowe zgłoszenia", href: "/", icon: "person" },
  {
    id: 1,
    text: "Zarządzanie zleceniami",
    href: "/zarzadzanie-zleceniami",
    icon: "person",
  },
  { id: 2, text: "Lista pracowników", href: "/", icon: "person" },
  { id: 3, text: "Archiwum napraw", href: "/", icon: "person" },
];

export function NavPanel() {
  return (
    <nav className="nav nav--hidden">
      <ul className="board-page__menu">
        {menuItems.map(({ text, icon, id, href }) => (
          <li key={id} className="menu__item">
            <NavLink className="menu__link" to={href}>
              <Icon
                additionalClasses="mr-2"
                size="sm"
                icon={icon}
                color="white"
              />
              {text}
            </NavLink>
          </li>
        ))}
        <li className="menu__item">
          <Icon
            additionalClasses="menu__toggler"
            size="sm"
            icon="arrow"
            color="white"
          />
        </li>
      </ul>
    </nav>
  );
}
