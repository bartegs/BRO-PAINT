import * as React from "react";
import { Button } from "../../../../../../common/react/components";
import { ButtonColor } from "../../../../../../common/utils/types";

interface OwnProps {
  color: ButtonColor;
}

export function Buttons({ color }: OwnProps) {
  return (
    <div className="task-card__buttons">
      <Button
        text="Zatwierdź"
        additionalClasses="task-card__button mr-1"
        color={color}
      />
      <Button
        text="Odrzuć"
        additionalClasses="task-card__button ml-1"
        variant="secondary"
        color={color}
      />
    </div>
  );
}
