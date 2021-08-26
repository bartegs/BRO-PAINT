import * as React from "react";

import classnames from "classnames";

import type { Color } from "../../../../../../../utils/types";
import { Tooltip } from "../Tooltip/Tooltip";

interface InputOutlinedProps {
  setState: (arg: any) => void;
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
  hasTooltip?: boolean;
  tooltipText?: string;
}

export function InputOutlined({
  setState,
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
  hasTooltip = false,
  tooltipText,
}: InputOutlinedProps) {
  function handleValueChange(event: React.ChangeEvent<HTMLInputElement>) {
    setState(event.currentTarget.value);
  }
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
      <div className="input-outlined__container">
        <input
          onChange={handleValueChange}
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

        {hasTooltip && <Tooltip color={color} text={tooltipText} />}
      </div>
    </>
  );
}
