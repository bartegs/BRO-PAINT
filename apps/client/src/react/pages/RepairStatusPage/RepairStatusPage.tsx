import * as React from "react";

import classnames from "classnames";

export function RepairStatusPage(): JSX.Element {
  enum Color {
    black = "#303030",
    green = "#008377",
    blue = "#006180",
    pink = "#6F0032",
  }

  interface Stage {
    title: string;
    descrption: string;
    color: Color;
  }

  type Stages = Stage[];

  const stages: Stages = [
    {
      color: Color.black,
      title: "Zlecenie przyjęte Zaczynamy!",
      descrption: "test",
    },
    { color: Color.green, title: "Prace przygotowawcze", descrption: "test" },
    { color: Color.blue, title: "Prace lakiernicze", descrption: "test" },
    {
      color: Color.pink,
      title: "Detailing i kontrola jakości",
      descrption: "test",
    },
    {
      color: Color.pink,
      title: "Zlecenie ukończone. Możesz odebrać auto!",
      descrption: "test",
    },
  ];

  return (
    <div className="container repair-status-page">
      <div className="repair-status-page__form-container">miki page</div>
      <div className="repair-status-page__axis-container axis">
        {stages.map((item, i) => {
          return (
            <>
              <div
                className={classnames("axis__segment", {
                  "axis__segment--last": i === stages.length - 1,
                })}
                style={{ backgroundColor: item.color }}
              >
                <div
                  className="axis__point"
                  style={{ backgroundColor: item.color }}
                />
              </div>
              <div
                className={classnames("axis__card card", {
                  "card--first": i === 0,
                  "card--last": i === stages.length - 1,
                })}
              >
                card1
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
