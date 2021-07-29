import * as React from "react";
import { Button } from "../../../components/Button";

export function NewRepairCalculatorCard(): JSX.Element {
  const calculatedPrice: number = 2137;
  // const calculatedPriceString: string = JSON.stringify(calculatedPrice) + (calculatedPrice.isInteger && "")
  // function sendToContactForm() {
  //   //   //calculator state > contact state
  // }
  return (
    <div className="new-repair-calculator-card">
      <div className="new-repair-calculator-card__price">
        <span>Szacunkowy koszt wynosi: </span>
        <span>{`${calculatedPrice},00zł`}</span>
      </div>
      <span className="new-repair-calculator-card__instruction">
        Jeśli chcesz zlecić nam usługę, naciśnij przycisk poniżej.
      </span>
      <Button
        text="Zleć usługę"
        // onClick={sendToContactForm}
        variation="primary"
        type="button"
        additionalClasses="button--primary"
      />
      <span className="new-repair-calculator-card__note">
        *Wyliczona kwota jest jedynie szacunkiem. Każde zlecenie jest wyceniane
        indywidualne, ponieważ wpływ na końcowy koszt ma bardzo wiele czynników.
      </span>
    </div>
  );
}
