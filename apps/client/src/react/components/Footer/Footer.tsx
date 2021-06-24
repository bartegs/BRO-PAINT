import * as React from "react";
import classnames from "classnames";

export interface FooterProps {
  variant?: "light" | "dark";
}
export function Footer({ variant = "dark" }: FooterProps): JSX.Element {
  return (
    <footer
      className={classnames("container footer", {
        "footer--light": variant === "light",
      })}
    >
      <div className="footer__item contact">
        <div className="contact__item mr-2">
          <span
            className={classnames("icon icon--sm icon--footer-phone", {
              "icon--white": variant === "light",
            })}
          />
          +48 240 420 210
        </div>
        <div className="contact__item">
          <span
            className={classnames("icon icon--sm icon--footer-email mr-1", {
              "icon--white": variant === "light",
            })}
          />
          bropaint@brocorp.com
        </div>
      </div>

      <div className="footer__item socials">
        <a
          href="https://www.facebook.com/BRO-PAINT-109770757973964"
          role="button"
        >
          <span
            className={classnames("icon icon--sm icon--fb", {
              "icon--white": variant === "light",
            })}
          />
        </a>
        <a href="https://www.instagram.com/bropaint_cars/" role="button">
          <span
            className={classnames("icon icon--sm icon--ig mx-2", {
              "icon--white": variant === "light",
            })}
          />
        </a>
        <a href="https://twitter.com/bropaint1" role="button">
          <span
            className={classnames("icon icon--sm icon--tt", {
              "icon--white": variant === "light",
            })}
          />
        </a>
      </div>

      <div className="footer__item informations">
        <a href="/" className="informations__item mr-2">
          BRO PAINT © 2021
        </a>
        <a href="/privacy" className="informations__item">
          Polityka prywatności
        </a>
      </div>
    </footer>
  );
}
