import * as React from "react";
import classnames from "classnames";
import { Color } from "../../../../../../../utils/types";

interface OwnProps {
  text: string;
  color?: Color;
}

export function Tooltip({ text, color = "green" }: OwnProps): JSX.Element {
  return (
    <div className={classnames(`tooltip tooltip--${color}`)}>
      <span>?</span>
      <div className="tooltip__text">{text}</div>
    </div>
  );
}
