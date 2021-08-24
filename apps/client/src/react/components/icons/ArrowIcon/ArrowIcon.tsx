import * as React from "react";
import classNames from "classnames";

export interface ArrowIconProps {
  color?:
    | "green"
    | "green-light"
    | "blue"
    | "blue-light"
    | "pink"
    | "pink-light";

  additionalClasses?: string;
}

export function ArrowIcon({
  color = "green",
  additionalClasses,
}: ArrowIconProps): JSX.Element {
  return (
    <span
      className={classNames(
        "arrow-icon",
        `arrow-icon--arrow`,
        `arrow-icon--${color}`,
        `arrow-icon--gallery-arrow`,
        { [additionalClasses]: additionalClasses }
      )}
    />
  );
}
