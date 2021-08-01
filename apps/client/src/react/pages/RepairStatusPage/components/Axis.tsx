import * as React from "react";

import classnames from "classnames";

import type { Stages } from "../RepairStatusPage";

import { Card } from "./Card";

interface OwnProps {
  stages: Stages;
}

export function Axis({ stages }: OwnProps): JSX.Element {
  return (
    <div className="repair-status-page__axis-container axis">
      {stages.map(({ color, title, descrption, id }, i) => (
        <React.Fragment key={id}>
          <div
            className={classnames("axis__segment", {
              "axis__segment--last": i === stages.length - 1,
            })}
            style={{ backgroundColor: color }}
          >
            <div className="axis__point" style={{ backgroundColor: color }} />
          </div>
          <Card
            additionalClasses={classnames({
              "card--first": i === 0,
              "card--last": i === stages.length - 1,
            })}
            desc={descrption}
            title={title}
          />
        </React.Fragment>
      ))}
    </div>
  );
}
