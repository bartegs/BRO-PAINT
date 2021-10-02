import * as React from "react";

import classnames from "classnames";

import type { RepairMainStages } from "../RepairStatusPage";

import { Card } from "./Card";

interface OwnProps {
  stages: RepairMainStages;
  repairStage: number;
}

export function handleAxisColoring(
  stageId: number,
  stageColor: string,
  repairStage: number
): { segmentColor: string; pointColor: string } {
  if (stageId <= repairStage) {
    return { segmentColor: stageColor, pointColor: stageColor };
  }
  return {
    segmentColor: "grey-light",
    pointColor: "white",
  };
}

export function Axis({ stages, repairStage }: OwnProps): JSX.Element {
  return (
    <section className="repair-status-page__axis-container axis">
      {stages.map(({ color, title, description, id }, i) => {
        const isFirstElement = i === 0;
        const isLastElement = i === stages.length - 1;

        const { segmentColor, pointColor } = handleAxisColoring(
          i,
          color,
          repairStage
        );

        return (
          <React.Fragment key={id}>
            <div
              className={classnames(
                "axis__segment segment",
                `segment--${segmentColor}`,
                {
                  "segment--last": isLastElement,
                }
              )}
            >
              <div
                className={classnames(
                  "segment__point point",
                  `point--${pointColor}`
                )}
              />
            </div>
            <Card
              additionalClasses={classnames({
                "card--first": isFirstElement,
                "card--last": isLastElement,
                "card--inactive":
                  typeof repairStage === "undefined" || i > repairStage,
              })}
              desc={description}
              title={title}
              isFirst={isFirstElement}
              isLast={isLastElement}
            />
          </React.Fragment>
        );
      })}
    </section>
  );
}
