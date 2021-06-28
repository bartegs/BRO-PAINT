import * as React from "react";

interface OwnProps {
  onClick: () => void;
}

export function NavbarToggler({ onClick }: OwnProps): JSX.Element {
  return (
    <div
      tabIndex={0}
      className="navbar-toggler"
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
