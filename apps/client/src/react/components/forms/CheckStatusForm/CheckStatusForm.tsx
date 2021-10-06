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
  inputInitialValue?: string;
}

export const formTitle = "Sprawdź status zlecenia";

export function CheckStatusForm({
  additionalClasses,
  buttonColor = "pink",
  headingColor = "white-a-80",
  inputFontTheme = "light",
  inputBorderColor = "pink",
  background = "light",
  inputInitialValue,
}: OwnProps): JSX.Element {
  const [orderNumber, setOrderNumber] = React.useState(inputInitialValue || "");
  const [isLoading, setIsLoading] = React.useState(false);
  const { setOrder } = React.useContext(AppContext);
  const [hasError, setHasError] = React.useState(false);
  const history = useHistory();

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    setIsLoading(true);
    fetch(`http://localhost:3000/orders/${orderNumber}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }

        throw new Error("miki z tym");
      })
      .then((data) => {
        setOrder(data);
        setIsLoading(false);
        setHasError(false);
        history.push("/status-zlecenia");
      })
      .catch(() => {
        setOrder({});
        setHasError(true);
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
      <h3 className={`text--${headingColor}`}>{formTitle}</h3>
      <form action="" onSubmit={handleSubmit}>
        <Input
          placeholder="Podaj id zlecenia"
          name="order-code"
          value={orderNumber}
          setState={setOrderNumber}
          additionalClasses="mt-3 mb-5"
          borderColor={inputBorderColor}
          fontTheme={inputFontTheme}
          hasError={hasError}
        />
        <Button
          text="Sprawdź"
          variant="primary"
          color={buttonColor}
          type="submit"
          isLoading={isLoading}
          isDisabled={inputInitialValue === orderNumber}
        />
      </form>
    </div>
  );
}
