import * as React from "react";
import classNames from "classnames";

export type CarSizeType = "car-sm" | "car-md" | "car-lg";
export type CarIconType = "car-small" | "car-medium" | "car-big";

export interface CarIconProps {
  icon: CarIconType;
  color?: "black-light" | "green" | "blue" | "pink";
  size?: CarSizeType;
  additionalClasses?: string;
}

export function CarIcon({
  icon,
  color = "black-light",
  size = "car-sm",
  additionalClasses,
}: CarIconProps): JSX.Element {
  return (
    <span
      className={classNames(
        "car-icon",
        `car-icon--${icon}`,
        `car-icon--${color}`,
        `car-icon--${size}`,
        { [additionalClasses]: additionalClasses }
      )}
    />
  );
}
