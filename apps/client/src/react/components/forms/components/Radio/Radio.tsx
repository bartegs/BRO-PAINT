import * as React from "react";
import classnames from "classnames";
import { Color } from "../../../../../../../utils/types";

interface RadioData {
  id: string;
  value: string | number;
  additionalClasses?: string;
}

interface RadioProps {
  id: string;
  name: string;
  labelText: string;
  radioData: RadioData[];
  value: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
  color?: Color;
}

export function Radio({
  id,
  labelText,
  name,
  radioData,
  value,
  setState,
  color,
}: RadioProps): JSX.Element {
  function handleValueChange(event: React.ChangeEvent<HTMLInputElement>) {
    setState(event.currentTarget.value);
  }

  return (
    <>
      <label
        htmlFor={id}
        className={classnames(
          `radio-container__label radio-container__label--${color}`
        )}
      >
        {labelText}
      </label>
      <div
        id={id}
        className={classnames(`radio-container radio-container--${color}`)}
      >
        {radioData.map(
          ({
            id: radioDataId,
            value: radioDataValue,
            additionalClasses: radioDataAdditionalClasses,
          }) => (
            <label
              key={radioDataId}
              className={classnames(
                `radio radio--${color} ${radioDataAdditionalClasses}`
              )}
              htmlFor={radioDataId}
            >
              <span className="radio__input">
                <input
                  type="radio"
                  id={radioDataId}
                  name={name}
                  value={radioDataValue}
                  checked={value === radioDataValue}
                  onChange={handleValueChange}
                />
                <span
                  className={classnames(
                    `radio__control radio__control--${color}`
                  )}
                />
              </span>
              <span className="radio__label">{radioDataValue}</span>
            </label>
          )
        )}
      </div>
    </>
  );
}
