import * as React from "react";

import classnames from "classnames";

import type { Color } from "../../../../../../../utils/types";

interface InputProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  value: string;
  labelText: string;
  checked?: boolean;
  placeholder?: string;
  id?: string;
  additionalClasses?: string;
  type?: string;
  required?: boolean;
  color?: Color;
  fontTheme?: "dark" | "light";
}

export function InputOutlined({
  onChange,
  name,
  value,
  labelText,
  checked,
  placeholder,
  id,
  additionalClasses,
  type,
  required,
  color,
  fontTheme,
}: InputProps) {
  return (
    <>
      <label
        htmlFor="paint"
        className={classnames(
          `input-outlined__label input-outlined__label--${color}`
        )}
      >
        {labelText}
      </label>
      <input
        onChange={onChange}
        className={classnames(
          "input-outlined",
          additionalClasses,
          `input-outlined--border-${color}`,
          `input-outlined--font-${fontTheme}`
        )}
        name={name}
        placeholder={placeholder}
        value={value}
        checked={checked}
        id={id}
        type={type}
        required={required}
      />
    </>
  );
}
