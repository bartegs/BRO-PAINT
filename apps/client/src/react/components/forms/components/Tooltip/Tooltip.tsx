import * as React from "react";

interface OwnProps {
  text: string;
}

export function Tooltip({ text }: OwnProps): JSX.Element {
  return (
    <div className="tooltip">
      <span>?</span>
      <div className="tooltip__text">{text}</div>
    </div>
  );
}
