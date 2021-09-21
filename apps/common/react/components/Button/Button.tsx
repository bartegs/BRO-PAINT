import * as React from "react";

import classnames from "classnames";

import type { ButtonColor } from "../../../utils/types";

export interface ButtonProps {
  type?: "submit" | "button" | "reset";
  variant?: "primary" | "secondary";
  onClick?: () => void;
  text: string;
  additionalClasses?: string;
  color: ButtonColor;
}

export function Button({
  type = "button",
  variant = "primary",
  onClick,
  text,
  additionalClasses,
  color = "pink",
}: ButtonProps): JSX.Element {
  return (
    <button
      onClick={onClick}
      className={classnames(
        "button",
        `button--${variant}`,
        `button--${color}-${variant}`,
        additionalClasses
      )}
      type={type}
    >
      {text}
    </button>
  );
}
