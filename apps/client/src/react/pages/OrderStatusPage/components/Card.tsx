import * as React from "react";

import AnimateHeight from "react-animate-height";

import classnames from "classnames";

import { Icon } from "../../../../../../common/react/components";

interface OwnProps {
  title: string;
  desc: string;
  additionalClasses: string;
  isFirst: boolean;
  isLast: boolean;
}

export function Card({
  title,
  desc,
  additionalClasses,
  isFirst,
  isLast,
}: OwnProps): JSX.Element {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const isCardInactive = additionalClasses.includes("card--inactive");

  return (
    <div className={classnames("axis__card card", additionalClasses)}>
      <h4 className="card__heading">{title}</h4>
      {isFirst || isLast ? (
        <div className="card__images">
          <Icon
            additionalClasses={classnames({
              "icon--left": isLast,
            })}
            color={isCardInactive ? "grey" : "black"}
            icon="flag"
            size="lg"
          />
          {isLast && (
            <Icon
              additionalClasses={classnames({
                "icon--right": isLast,
              })}
              color={isCardInactive ? "grey" : "black"}
              icon="flag"
              size="lg"
            />
          )}
        </div>
      ) : null}
      {!isFirst && !isLast ? (
        <>
          <AnimateHeight height={isExpanded ? "auto" : 0} duration={500}>
            <p className="card__text">{desc}</p>
          </AnimateHeight>
          <button
            onClick={() => setIsExpanded((prevState) => !prevState)}
            className={classnames("card__button toggler icon--grey", {
              "toggler--toggled": isExpanded,
            })}
          />
        </>
      ) : null}
    </div>
  );
}
