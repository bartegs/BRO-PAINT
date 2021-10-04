import * as React from "react";
import { NavLink } from "react-router-dom";
import classnames from "classnames";
import { Color } from "../../../../../../../common/utils/types";

interface CheckboxProps {
  name: string;
  id: string;
  color: Color;
  isChecked: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
  required?: boolean;
}

export function Checkbox({
  name,
  id,
  color,
  isChecked,
  setState,
  required,
}: CheckboxProps): JSX.Element {
  function handleCheckboxChange() {
    setState((prevState: boolean) => !prevState);
  }
  return (
    <>
      <label htmlFor="privacy" className="w-100 mb-2">
        <input
          name={name}
          id={id}
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          required={required}
          className={classnames("checkbox", `checkbox--${color}`)}
        />
        <p className="new-order-page__checkbox-paragraph">
          Zapoznałem/am się z
          <NavLink
            to="/polityka-prywatnosci"
            className="new-order-page__checkbox-paragraph--privacy"
          >
            &nbsp;Polityką Prywatności&nbsp;
          </NavLink>
          i wyrażam zgodę na przetwarzanie danych osobowych.
        </p>
      </label>
    </>
  );
}
