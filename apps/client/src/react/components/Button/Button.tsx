import * as React from "react";

import classnames from "classnames";
import { Color } from "../../../../../utils/models";

interface ButtonProps {
  type?: "submit" | "button" | "reset";
  onClick?: () => void;
  text: string;
  additionalClasses?: string;
  color: Color;
}

export function Button({
  type = "button",
  onClick,
  text,
  additionalClasses,
  color = "pink",
}: ButtonProps): JSX.Element {
  return (
    <button
      onClick={onClick}
      className={classnames("button", `button--${color}`, additionalClasses)}
      type={type}
    >
      {text}
    </button>
  );
}
