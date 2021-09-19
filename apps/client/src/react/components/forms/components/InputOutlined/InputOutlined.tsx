import * as React from "react";

import classnames from "classnames";

import type { Color } from "../../../../../../../common/utils/types";
import { Tooltip } from "../Tooltip/Tooltip";

interface InputOutlinedProps {
  setState: React.Dispatch<React.SetStateAction<string>>;
  name: string;
  value: string;
  labelText: string;
  id: string;
  color: Color;
  placeholder?: string;
  additionalClasses?: string;
  required?: boolean;
  fontTheme?: "dark" | "light";
  hasTooltip?: boolean;
  tooltipText?: string;
}

const InputOutlined = React.forwardRef<HTMLInputElement, InputOutlinedProps>(
  (props: InputOutlinedProps, ref) => {
    function handleValueChange(event: React.ChangeEvent<HTMLInputElement>) {
      props.setState(event.currentTarget.value);
    }

    return (
      <>
        <label
          htmlFor={props.id}
          className={classnames(
            `input-outlined__label input-outlined__label--${props.color}`
          )}
        >
          {props.labelText}
        </label>
        <div className="input-outlined__container">
          <input
            onChange={handleValueChange}
            ref={ref}
            className={classnames(
              "input-outlined",
              props.additionalClasses,
              `input-outlined--border-${props.color}`,
              `input-outlined--font-${props.fontTheme}`
            )}
            name={props.name}
            placeholder={props.placeholder}
            value={props.value}
            id={props.id}
            type="text"
            required={props.required}
          />

          {props.hasTooltip && (
            <Tooltip color={props.color} text={props.tooltipText} />
          )}
        </div>
      </>
    );
  }
);

export { InputOutlined };
export default InputOutlined;
