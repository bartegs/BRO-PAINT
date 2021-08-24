import * as React from "react";
import classnames from "classnames";
import { Color } from "../../../../../../../utils/types";
import { CarIcon, CarSizeType, CarIconType } from "../../../icons/CarIcon";

interface RadioData {
  id: string;
  value: string | number;
  icon: CarIconType;
  iconSize: CarSizeType;
  additionalClasses?: string;
}

interface RadioCarSizeProps {
  id: string;
  name: string;
  labelText: string;
  radioData: RadioData[];
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  color?: Color;
}

export function RadioCarSize({
  id,
  labelText,
  name,
  radioData,
  value,
  onChange,
  color,
}: RadioCarSizeProps): JSX.Element {
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
        className={classnames(
          `radio-container radio-container--${color} radio-container--car-size`
        )}
      >
        {radioData.map(
          ({
            id: radioDataId,
            value: radioDataValue,
            additionalClasses: radioDataAdditionalClasses,
            icon: radioDataIcon,
            iconSize: radioDataIconSize,
          }) => (
            <label
              key={radioDataId}
              className={classnames(
                `radio--car-size radio--${color} ${radioDataAdditionalClasses}`
              )}
              htmlFor={radioDataId}
            >
              <span className="radio__input--car-size">
                <input
                  type="radio"
                  id={radioDataId}
                  name={name}
                  value={radioDataValue}
                  checked={value === radioDataValue}
                  onChange={onChange}
                />
              </span>
              <CarIcon
                icon={radioDataIcon}
                size={radioDataIconSize}
                color={value === radioDataValue ? `${color}` : "black-light"}
              />
            </label>
          )
        )}
      </div>
    </>
  );
}
