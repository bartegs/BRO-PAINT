import * as React from "react";

interface OwnProps {
  onClick: () => void;
  isMenuOpen: boolean;
}

export function NavbarToggler({ onClick, isMenuOpen }: OwnProps): JSX.Element {
  return (
    <div
      tabIndex={0}
      className="navbar-toggler"
      role="button"
      onClick={onClick}
      onKeyDown={onClick}
    >
      {isMenuOpen === false ? (
        <>
          <div className="navbar-toggler__bar" />
          <div className="navbar-toggler__bar" />
          <div className="navbar-toggler__bar" />
        </>
      ) : (
        <>
          <div className="navbar-toggler__cross navbar-toggler__cross--a" />
          <div className="navbar-toggler__cross navbar-toggler__cross--b" />
        </>
      )}
    </div>
  );
}
