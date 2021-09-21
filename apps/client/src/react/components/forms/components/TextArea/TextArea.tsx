import * as React from "react";
import classnames from "classnames";
import { Color } from "../../../../../../../common/utils/types";

type TextAreaVariant = "outlined" | "underlined";

interface TextAreaProps {
  labelText: string;
  name: string;
  id: string;
  placeholder: string;
  value: string | number;
  setState: (arg: string) => void;
  variant: TextAreaVariant;
  additionalClasses?: string;
  required?: boolean;
  color?: Color;
}

export function TextArea({
  labelText,
  color,
  name,
  id,
  placeholder,
  value,
  setState,
  required,
  variant,
  additionalClasses,
}: TextAreaProps): JSX.Element {
  function handleTextAreaChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setState(event.currentTarget.value);
  }

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
        onChange={handleTextAreaChange}
        required={required}
      />
    </>
  );
}
