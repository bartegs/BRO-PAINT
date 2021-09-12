import * as React from "react";

import classnames from "classnames";
import type { Color } from "../../../../../../common/utils/types";

import { Button } from "../../Button";
import { Temp } from "../components/Temp";

interface OwnProps {
  additionalClasses?: string;
  headingColor?: Color | "white-a-80";
  buttonColor?: Color;
  inputFontTheme?: "dark" | "light";
  inputBorderColor?: Color;
  background?: "light" | "dark";
}

export function CheckStatusForm({
  additionalClasses,
  buttonColor = "pink",
  headingColor = "white-a-80",
  inputFontTheme = "light",
  inputBorderColor = "pink",
  background = "light",
}: OwnProps): JSX.Element {
  const [orderNumber, setOrderNumber] = React.useState("");

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
  }

  return (
    <div
      className={classnames(
        additionalClasses,
        "check-status-form",
        `check-status-form--background-${background}`
      )}
    >
      <h3 className={`text--${headingColor}`}>Sprawdź status zlecenia</h3>
      <form action="" onSubmit={handleSubmit}>
        <Temp
          placeholder="Podaj numer zlecenia"
          name="repair-code"
          value={orderNumber}
          setState={setOrderNumber}
          additionalClasses="mt-3 mb-5"
          borderColor={inputBorderColor}
          fontTheme={inputFontTheme}
        />
        <Button
          text="Sprawdź"
          variant="primary"
          color={buttonColor}
          type="submit"
        />
      </form>
    </div>
  );
}
