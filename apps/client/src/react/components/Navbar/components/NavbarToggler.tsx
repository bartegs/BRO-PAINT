import classnames from "classnames";
import * as React from "react";

interface OwnProps {
  onClick: () => void;
  isClicked: boolean;
}

export function NavbarToggler({ onClick, isClicked }: OwnProps): JSX.Element {
  return (
    <div
      tabIndex={0}
      className={classnames("navbar-toggler", {
        "navbar-toggler--close": isClicked,
      })}
      role="button"
      onClick={onClick}
      onKeyDown={onClick}
    >
      <div className="navbar-toggler__bar" />
      <div className="navbar-toggler__bar" />
      <div className="navbar-toggler__bar" />
    </div>
  );
}
