import * as React from "react";
import classnames from "classnames";
import { Color } from "../../../../../../../utils/types";

type TextAreaVariant = "outlined" | "underlined";

interface TextAreaProps {
  labelText: string;
  color?: Color;
  name: string;
  id: string;
  placeholder: string;
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
  variant: TextAreaVariant;
  additionalClasses?: string;
}

export function TextArea({
  labelText,
  color,
  name,
  id,
  placeholder,
  value,
  onChange,
  required,
  variant,
  additionalClasses,
}: TextAreaProps): JSX.Element {
  return (
    <>
      <label
        htmlFor={id}
        className={classnames(
          `text-area__label--${variant} text-area__label--${variant}--${color}`
        )}
      >
        {labelText}
      </label>
      <textarea
        name={name}
        id={id}
        className={classnames(
          `text-area text-area--${variant} text-area--${variant}--${color} ${additionalClasses}`
        )}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      />
    </>
  );
}
