import * as React from "react";

import classnames from "classnames";

import { Color } from "../../../../../utils/models";

import { Button } from "../Button";
import { Input } from "../Input";

interface OwnProps {
  headingColor?: Color | "white-a-80";
  buttonColor?: Color;
  inputFontTheme?: "dark" | "light";
  inputBorderColor?: Color;
  background?: "light" | "dark";
}

export function CheckStatusForm({
  buttonColor = "pink",
  headingColor = "white-a-80",
  inputFontTheme = "light",
  inputBorderColor = "pink",
  background = "light",
}: OwnProps): JSX.Element {
  const [value, setValue] = React.useState("");

  function handleValueChange(event: React.ChangeEvent<HTMLInputElement>) {
    return setValue(event.currentTarget.value);
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
  }

  return (
    <div
      className={classnames(
        "check-status-form",
        `check-status-form--background-${background}`
      )}
    >
      <h3 className={`text--${headingColor}`}>Sprawdź status zlecenia</h3>
      <form action="" onSubmit={handleSubmit}>
        <Input
          placeholder="Podaj numer zlecenia"
          name="repair-code"
          value={value}
          onChange={handleValueChange}
          additionalClasses="input--homepage mt-3 mb-5"
          borderColor={inputBorderColor}
          fontTheme={inputFontTheme}
        />
        <Button text="Sprawdź" color={buttonColor} type="submit" />
      </form>
    </div>
  );
}
