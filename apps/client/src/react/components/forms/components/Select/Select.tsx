import * as React from "react";
import classnames from "classnames";
import { Color } from "../../../../../../../utils/types";

interface OptionData {
  id: number;
  value: string | number;
  text: string;
}

interface SelectProps {
  labelText: string;
  color: Color;
  name: string;
  id: string;
  value: string | number;
  onChange: (event: React.FormEvent<HTMLSelectElement>) => void;
  required?: boolean;
  optionsData: OptionData[];
}

export function Select({
  labelText,
  color,
  name,
  id,
  value,
  onChange,
  required,
  optionsData,
}: SelectProps): JSX.Element {
  return (
    <>
      <label
        htmlFor={id}
        className={classnames("select__label", `select__label--${color}`)}
      >
        {labelText}
      </label>
      <div className={classnames("select", `select--${color}`)}>
        <select
          name={name}
          id={id}
          value={value}
          onChange={onChange}
          required={required}
        >
          {optionsData.map(
            ({
              value: optionDataValue,
              text: optionDataText,
              id: optionDataId,
            }) => (
              <option
                value={optionDataValue}
                hidden={optionDataValue === ""}
                key={optionDataId}
              >
                {optionDataText}
              </option>
            )
          )}
        </select>
      </div>
    </>
  );
}
