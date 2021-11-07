import * as React from "react";
import classnames from "classnames";

import { NavLink, useLocation } from "react-router-dom";
import { Icon } from "../../../../../common/react/components";

export function Footer(): JSX.Element {
  const [variant, setVariant] = React.useState<"dark" | "light">("dark");
  const { pathname } = useLocation();

  React.useEffect(() => {
    if (pathname === "/") {
      setVariant("light");
    } else {
      setVariant("dark");
    }
  }, [pathname]);

  const iconColor = variant === "dark" ? "black-light" : "white-dark";

  return (
    <footer
      className={classnames("container footer", {
        "footer--home-page": variant === "light",
      })}
    >
      <div className="footer__item contact">
        <div className="contact__item mr-2">
          <Icon icon="footer-phone" color={iconColor} />
          +48 240 420 210
        </div>
        <div className="contact__item">
          <Icon
            icon="footer-email"
            color={iconColor}
            additionalClasses="mr-1"
          />
          bropaint@wp.pl
        </div>
      </div>

      <div className="footer__item socials">
        <a
          href="https://www.facebook.com/BRO-PAINT-109770757973964"
          role="button"
        >
          <Icon icon="fb" color={iconColor} />
        </a>
        <a href="https://www.instagram.com/bropaint_cars/" role="button">
          <Icon icon="ig" color={iconColor} additionalClasses="mx-2" />
        </a>
        <a href="https://twitter.com/bropaint1" role="button">
          <Icon icon="tt" color={iconColor} />
        </a>
      </div>

      <div className="footer__item informations">
        <NavLink to="/prawa-autorskie" className="informations__item mr-2">
          BRO PAINT © 2021
        </NavLink>
        <NavLink to="/polityka-prywatnosci" className="informations__item">
          Polityka prywatności
        </NavLink>
      </div>
    </footer>
  );
}
