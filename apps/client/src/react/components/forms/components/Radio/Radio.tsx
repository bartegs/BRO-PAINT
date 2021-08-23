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
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  color?: Color;
}

export function Radio({
  id,
  labelText,
  name,
  radioData,
  value,
  onChange,
  color,
}: // color,
RadioProps): JSX.Element {
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
              className={classnames(`radio ${radioDataAdditionalClasses}`)}
              htmlFor={radioDataId}
            >
              <span className="radio__input">
                <input
                  type="radio"
                  id={radioDataId}
                  name={name}
                  value={radioDataValue}
                  checked={value === radioDataValue}
                  onChange={onChange}
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
