import * as React from "react";

import classnames from "classnames";

import { Color } from "../../../utils/types";
import { Tooltip } from "../../../../client/src/react/components/forms/components/Tooltip";

interface InputOutlinedProps {
  setState: React.Dispatch<React.SetStateAction<string>>;
  name: string;
  value: string;
  labelText: string;
  labelCentered?: boolean;
  id: string;
  color: Color;
  password?: boolean;
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
        <div
          className={classnames(
            `input-outlined__label-container`,
            props.additionalClasses
          )}
        >
          <label
            htmlFor={props.id}
            className={classnames(
              `input-outlined__label input-outlined__label--${props.color}
              `,
              {
                "input-outlined__label--centered": props.labelCentered,
              }
            )}
          >
            {props.labelText}
          </label>
        </div>

        <div className="input-outlined__container">
          <input
            onChange={handleValueChange}
            ref={ref}
            className={classnames(
              "input-outlined",
              `input-outlined--border-${props.color}`,
              `input-outlined--font-${props.fontTheme}`
            )}
            name={props.name}
            placeholder={props.placeholder}
            value={props.value}
            id={props.id}
            type={props.password ? "password" : "text"}
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
