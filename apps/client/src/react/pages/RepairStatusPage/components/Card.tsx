import * as React from "react";

import AnimateHeight from "react-animate-height";

import classnames from "classnames";

interface OwnProps {
  title: string;
  desc: string;
  additionalClasses: string;
}

export function Card({
  title,
  desc,
  additionalClasses,
}: OwnProps): JSX.Element {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <div className={classnames("axis__card card", additionalClasses)}>
      <h4 className="card__heading">{title}</h4>
      {!additionalClasses && (
        <>
          <AnimateHeight height={isExpanded ? "auto" : 0} duration={500}>
            <p className="card__text">{desc}</p>
          </AnimateHeight>
          <button
            onClick={() => setIsExpanded((prevState) => !prevState)}
            className="card__button"
          >
            I
          </button>
        </>
      )}
    </div>
  );
}
