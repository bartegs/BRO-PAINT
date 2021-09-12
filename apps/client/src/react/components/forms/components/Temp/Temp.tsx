import * as React from "react";

import classnames from "classnames";

import type { Color } from "../../../../../../../common/utils/types";

interface InputProps {
  setState: React.Dispatch<React.SetStateAction<string>>;
  name: string;
  value: string;
  checked?: boolean;
  placeholder?: string;
  id?: string;
  additionalClasses?: string;
  type?: string;
  required?: boolean;
  borderColor?: Color;
  fontTheme?: "dark" | "light";
}

export function Temp({
  setState,
  name,
  value,
  checked,
  placeholder,
  id,
  additionalClasses,
  type,
  required,
  borderColor,
  fontTheme,
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
        `input--font-${fontTheme}`
      )}
      name={name}
      placeholder={placeholder}
      value={value}
      checked={checked}
      id={id}
      type={type}
      required={required}
    />
  );
}
