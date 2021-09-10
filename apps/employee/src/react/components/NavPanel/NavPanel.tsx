import classnames from "classnames";
import * as React from "react";

import { NavLink } from "react-router-dom";
import { Icon, IconType } from "../../../../../common/react/components";

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

export function NavPanel() {
  const [isToggled, setIsToggled] = React.useState(false);

  return (
    <nav className={classnames("board-page__nav-panel nav-panel")}>
      <ul
        className={classnames("nav-panel__menu menu ", {
          "menu--hidden": isToggled,
        })}
      >
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
      </ul>
      <button
        className={classnames("menu__toggler toggler", {
          "toggler--toggled": !isToggled,
        })}
        onClick={() => setIsToggled((prevState) => !prevState)}
      >
        <Icon size="sm" icon="arrow" color="white" />
      </button>
    </nav>
  );
}
