import * as React from "react";

import { Icon } from "../../Icon";

export function NavbarMenuEmployee() {
  function logout() {
    sessionStorage.clear();
  }

  return (
    <ul>
      <li
        role="menuitem"
        onClick={logout}
        onKeyDown={(event) => event.code !== "Tab" && logout()}
      >
        <a href="/pracownik/logowanie" className="logout-link">
          <Icon additionalClasses="mr-2" size="sm" icon="logout" />
          Wyloguj się
        </a>
      </li>
    </ul>
  );
}
