import * as React from "react";
import classnames from "classnames";
import { Color } from "../../../../../../../utils/types";
import { Tooltip } from "../Tooltip/Tooltip";

interface OptionData {
  id: number;
  value: string | number;
  text: string;
}

interface SelectProps {
  labelText: string;
  color: Color;
  selectName: string;
  id: string;
  value: string | number;
  setState: (args: any) => void;
  required?: boolean;
  optionsData: OptionData[];
  hasTooltip?: boolean;
  tooltipText?: string;
}

export function Select({
  labelText,
  color,
  selectName,
  id,
  value,
  setState,
  required,
  optionsData,
  hasTooltip = false,
  tooltipText,
}: SelectProps): JSX.Element {
  function handleSelectChange(event: React.FormEvent<HTMLSelectElement>) {
    const element = event.currentTarget as HTMLSelectElement;
    setState(element.value);
  }


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
          name={selectName}
          id={id}
          value={value}
          onChange={handleSelectChange}
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
        {hasTooltip && (
         <Tooltip text={tooltipText}/>
        )}
      </div>
    </>
  );
}
