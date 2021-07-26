import * as React from "react";
import classNames from "classNames";

export function CardWithText({
  color,
  title,
  content,
}: {
  color: string;
  title: string;
  content: string;
}): JSX.Element {
  return (
    <div className="card-with-text">
      <h3
        className={classNames(
          "card-with-text__heading",
          `card-with-text__heading--with-${color}-border`
        )}
      >
        {title}
      </h3>
      <p>{content}</p>
    </div>
  );
}
