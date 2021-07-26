import classNames from "classNames";
import * as React from "react";

export function CardWithImage({
  image,
  color,
  title,
  content,
}: {
  title: string;
  content: string;
  image: string;
  color: string;
}): JSX.Element {
  return (
    <div className="card-with-image">
      <img className="card-with-image__image" alt={image} />
      <h3 className={classNames("card-with-image__heading", `text--${color}`)}>
        {title}
      </h3>
      <p className="card-with-image__text">{content}</p>
    </div>
  );
}
