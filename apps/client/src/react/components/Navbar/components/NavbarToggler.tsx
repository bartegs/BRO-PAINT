import classnames from "classnames";
import * as React from "react";

interface OwnProps {
  onClick: (e: any) => void;
  isClicked: boolean;
  handleMenuKeyboard: (e: React.KeyboardEvent) => void;
}

export function NavbarToggler({
  onClick,
  isClicked,
  handleMenuKeyboard,
}: OwnProps): JSX.Element {
  return (
    <div
      tabIndex={0}
      className={classnames("navbar-toggler", {
        "navbar-toggler--close": isClicked,
      })}
      role="menubar"
      onClick={onClick}
      onKeyDown={handleMenuKeyboard}
    >
      <div className="navbar-toggler__bar" />
      <div className="navbar-toggler__bar" />
      <div className="navbar-toggler__bar" />
    </div>
  );
}
