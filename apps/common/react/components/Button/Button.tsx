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
  isDisabled?: boolean;
  hasFixedWidth?: boolean;
}

export function Button({
  type = "button",
  variant = "primary",
  onClick,
  text,
  additionalClasses,
  color = "pink",
  isLoading = false,
  isDisabled = false,
  hasFixedWidth = true,
}: ButtonProps): JSX.Element {
  return (
    <button
      onClick={onClick}
      className={classnames("button", additionalClasses, {
        "button--stretchable": !hasFixedWidth,
        [`button--${variant} button--${color}-${variant}`]: !isDisabled,
        "button--disable": isDisabled,
      })}
      type={type}
      disabled={isDisabled}
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
