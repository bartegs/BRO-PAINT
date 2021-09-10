import * as React from "react";
import classNames from "classnames";

export type IconType =
  | "tt"
  | "phone"
  | "person"
  | "location"
  | "ig"
  | "footer-phone"
  | "footer-email"
  | "flag"
  | "fb"
  | "email"
  | "car"
  | "arrow"
  | "history"
  | "notifications"
  | "groups"
  | "fact-check";

export type IconColorType =
  | "white"
  | "white-dark"
  | "grey"
  | "black"
  | "black-light"
  | "green"
  | "green-light"
  | "blue"
  | "blue-light"
  | "pink"
  | "pink-light";

export interface IconProps {
  icon: IconType;
  color?: IconColorType;
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
