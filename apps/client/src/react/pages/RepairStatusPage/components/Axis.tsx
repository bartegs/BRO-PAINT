import * as React from "react";

import classnames from "classnames";

import type { RepairMainStages } from "../RepairStatusPage";

import { Card } from "./Card";

interface OwnProps {
  stages: RepairMainStages;
  repairStage: number;
}

function handleAxisColoring(
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
    <div className="repair-status-page__axis-container axis">
      {stages.map(({ color, title, descrption, id }, i) => {
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
                  "axis__segment--last": i === stages.length - 1,
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
                "card--first": i === 0,
                "card--last": i === stages.length - 1,
                "card--inactive":
                  typeof repairStage === "undefined" || i > repairStage,
              })}
              desc={descrption}
              title={title}
            />
          </React.Fragment>
        );
      })}
    </div>
  );
}
