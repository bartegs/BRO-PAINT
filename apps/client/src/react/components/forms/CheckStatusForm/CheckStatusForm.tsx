import * as React from "react";
import classnames from "classnames";

import { useHistory } from "react-router-dom";
import type { Color } from "../../../../../../common/utils/types";

import { Button } from "../../../../../../common/react/components";
import { Input } from "../components";
import { AppContext } from "../../../contexts/AppContext";

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
  const [isLoading, setIsLoading] = React.useState(false);
  const { repair, setRepair } = React.useContext(AppContext);
  const [hasError, setHasError] = React.useState(false);
  const history = useHistory();

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    setIsLoading(true);
    fetch(`http://localhost:3000/repairs/${orderNumber}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }

        throw new Error("miki z tym");
      })
      .then((data) => {
        setRepair(data);
        setIsLoading(false);
        history.push("/stan-naprawy");
      })
      .catch(({ message }) => {
        setRepair({});
        setHasError(message);
        setIsLoading(false);
      });
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
        <Input
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
          isLoading={isLoading}
        />
      </form>
    </div>
  );
}
