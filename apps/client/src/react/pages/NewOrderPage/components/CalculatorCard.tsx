import * as React from "react";
import { Color } from "../../../../../../common/utils/types";
import { Button } from "../../../../../../common/react/components";

interface CalculatorCardProps {
  result: number;
  color: Color;
}
const CalculatorCard = React.forwardRef<HTMLInputElement, CalculatorCardProps>(
  (
    { result, color }: CalculatorCardProps,
    ref: React.MutableRefObject<HTMLInputElement>
  ) => {
    const convertedPrice = result.toFixed(2).replace(".", ",");

    function handleReference() {
      ref.current.focus();
    }

    return (
      <div className="calculator-card">
        <div className="calculator-card__price">
          <span>Szacunkowy koszt wynosi: </span>
          <span>{`${convertedPrice}zł`}</span>
        </div>
        <span className="calculator-card__instruction">
          Jeśli chcesz zlecić nam usługę, naciśnij przycisk poniżej.
        </span>
        <Button
          text="Zleć usługę"
          color={color}
          type="button"
          variant="primary"
          onClick={handleReference}
        />
        <span className="calculator-card__note">
          *Wyliczona kwota jest jedynie szacunkiem. Każde zlecenie jest
          wyceniane indywidualne, ponieważ wpływ na końcowy koszt ma bardzo
          wiele czynników.
        </span>
      </div>
    );
  }
);

export { CalculatorCard };
