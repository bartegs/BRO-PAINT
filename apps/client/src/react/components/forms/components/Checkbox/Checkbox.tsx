import * as React from "react";
import classnames from "classnames";
import { Color } from "../../../../../../../utils/types";

interface SelectProps {
  name: string;
  id: string;
  color: Color;
  isChecked: boolean;
  setState: (arg: any) => void;
  required?: boolean;
}

export function Checkbox({
  name,
  id,
  color,
  isChecked,
  setState,
  required,
}: SelectProps): JSX.Element {
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
        <p className="new-repair-page__checkbox-paragraph">
          Zapoznałem/am się z
          <a href="https://policies.google.com/privacy?hl=en-US">
            &nbsp;Polityką Prywatności&nbsp;
          </a>
          i wyrażam zgodę na przetwarzanie danych osobowych.
        </p>
      </label>
    </>
  );
}
