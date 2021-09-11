import classnames from "classnames";
import * as React from "react";

import { Icon } from "../../../../../common/react/components";
import { Menu } from "./components";

export function NavPanel() {
  const [isToggled, setIsToggled] = React.useState(false);

  return (
    <nav className={classnames("board-page__nav-panel nav-panel")}>
      <Menu isMenuToggled={isToggled} />
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
