import * as React from "react";
import { NavLink } from "react-router-dom";

import classnames from "classnames";

import { Icon, IconType } from "../../../../../../common/react/components";

interface OwnProps {
  isMenuToggled: boolean;
}

interface MenuItemType {
  id: number;
  text: string;
  href: string;
  icon: IconType;
}
const menuItems: MenuItemType[] = [
  {
    id: 0,
    text: "Nowe zgłoszenia",
    href: "/",
    icon: "notifications",
  },
  {
    id: 1,
    text: "Zarządzanie zleceniami",
    href: "/zarzadzanie-zleceniami",
    icon: "fact-check",
  },
];

export function Menu({ isMenuToggled }: OwnProps): JSX.Element {
  return (
    <ul
      className={classnames("nav-panel__menu menu ", {
        "menu--hidden": isMenuToggled,
      })}
    >
      {menuItems.map(({ text, icon, id, href }) => (
        <li key={id} className="menu__item">
          <NavLink
            activeClassName="menu__link--active"
            exact
            className="menu__link"
            to={href}
          >
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
    </ul>
  );
}
