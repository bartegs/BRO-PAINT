import * as React from "react";
import { Button } from "../../../../../../common/react/components";
import { ButtonColor } from "../../../../../../common/utils/types";

interface OwnProps {
  color: ButtonColor;
  isSubmitDisabled?: boolean;
}

export function Buttons({ color, isSubmitDisabled }: OwnProps) {
  return (
    <div className="order-card__buttons">
      <Button
        type="submit"
        text="Zatwierdź"
        additionalClasses="order-card__button mr-1"
        color={color}
        isDisabled={isSubmitDisabled}
      />
      <Button
        type="reset"
        text="Odrzuć"
        additionalClasses="order-card__button ml-1"
        variant="secondary"
        color={color}
      />
    </div>
  );
}
