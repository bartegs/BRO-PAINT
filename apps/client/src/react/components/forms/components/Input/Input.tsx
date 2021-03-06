import * as React from "react";

import classnames from "classnames";

import type { Color } from "../../../../../../../common/utils/types";

interface InputProps {
  setState: React.Dispatch<React.SetStateAction<string>>;
  name: string;
  value: string;
  placeholder?: string;
  id?: string;
  additionalClasses?: string;
  required?: boolean;
  borderColor?: Color;
  fontTheme?: "dark" | "light";
  hasError?: boolean;
}

export function Input({
  setState,
  name,
  value,
  placeholder,
  id,
  additionalClasses,
  required,
  borderColor,
  fontTheme,
  hasError = false,
}: InputProps) {
  function handleValueChange(event: React.ChangeEvent<HTMLInputElement>) {
    setState(event.currentTarget.value);
  }
  return (
    <input
      onChange={handleValueChange}
      className={classnames(
        "input",
        additionalClasses,
        `input--border-${borderColor}`,
        `input--font-${fontTheme}`,
        { "input--with-error": hasError }
      )}
      name={name}
      placeholder={placeholder}
      value={value}
      id={id}
      type="text"
      required={required}
    />
  );
}
