import * as React from "react";
import { Button } from "../../../components/Button";

export function CalculatorCard(): JSX.Element {
  const calculatedPrice: number = 2137;
  // const calculatedPriceString: string = JSON.stringify(calculatedPrice) + (calculatedPrice.isInteger && "")
  // function sendToContactForm() {
  //   //   //calculator state > contact state
  // }
  return (
    <div className="calculator-card">
      <div className="calculator-card__price">
        <span>Szacunkowy koszt wynosi: </span>
        <span>{`${calculatedPrice},00zł`}</span>
      </div>
      <span className="calculator-card__instruction">
        Jeśli chcesz zlecić nam usługę, naciśnij przycisk poniżej.
      </span>
      <Button
        text="Zleć usługę"
        // onClick={sendToContactForm}
        color="pink"
        type="button"
        variant="primary"
      />
      <span className="calculator-card__note">
        *Wyliczona kwota jest jedynie szacunkiem. Każde zlecenie jest wyceniane
        indywidualne, ponieważ wpływ na końcowy koszt ma bardzo wiele czynników.
      </span>
    </div>
  );
}
