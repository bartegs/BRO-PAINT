import * as React from "react";

import classnames from "classnames";

import { Color } from "../../../../../utils/models";

interface InputProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
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

export function Input({
  onChange,
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
  return (
    <input
      onChange={onChange}
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
