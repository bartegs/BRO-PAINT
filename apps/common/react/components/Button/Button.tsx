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
  isLoading?: boolean;
}

export function Button({
  type = "button",
  variant = "primary",
  onClick,
  text,
  additionalClasses,
  color = "pink",
  isLoading = false,
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
      {type === "submit" && isLoading ? (
        <>
          <div className="button__throbber ">
            <div className="button__circle" />
          </div>
          {!isLoading && text}
        </>
      ) : (
        text
      )}
    </button>
  );
}
