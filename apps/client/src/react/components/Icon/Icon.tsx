import * as React from "react";
import classNames from "classnames";

export interface IconProps {
  icon:
    | "tt"
    | "tooltip"
    | "phone"
    | "person"
    | "location"
    | "ig"
    | "footer-phone"
    | "footer-email"
    | "flag"
    | "fb"
    | "email"
    | "dropdown-arrow"
    | "car"
    | "car-small"
    | "car-small"
    | "car-medium"
    | "car-big"
    | "arrow";
  color?: "white" | "white-dark" | "black" | "black-light";
  size?: "sm" | "md" | "lg";
  additionalClasses?: string;
}

export function Icon({
  icon,
  color = "black",
  size = "sm",
  additionalClasses,
}: IconProps): JSX.Element {
  return (
    <span
      className={classNames(
        "icon",
        `icon--${icon}`,
        `icon--${color}`,
        `icon--${size}`,
        { [additionalClasses]: additionalClasses }
      )}
    />
  );
}
