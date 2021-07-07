import * as React from "react";

import classnames from "classnames";

interface ButtonProps {
  type?: "submit" | "button" | "reset";
  onClick?: () => void;
  text: string;
  additionalClasses?: string;
  variation?: "primary" | "secondary" | "tertiary";
}

export function Button({
  type = "button",
  onClick,
  text,
  additionalClasses,
  variation = "primary",
}: ButtonProps): JSX.Element {
  return (
    <button
      onClick={onClick}
      className={classnames(
        "button",
        `button--${variation}`,
        additionalClasses
      )}
      type={type}
    >
      {text}
    </button>
  );
}
