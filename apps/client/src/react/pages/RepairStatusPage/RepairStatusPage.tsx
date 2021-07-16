import * as React from "react";

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
      <div className="repair-status-page__axis axis">
        {stages.map((item) => (
          <div
            className="axis__fragment"
            style={{ backgroundColor: item.color }}
          >
            <div
              className="axis__point"
              style={{ backgroundColor: item.color }}
            >
              <div className="axis__card">{item.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// <div className="repair-status-page__segment">
// <div
//   className="axis-fragment"
//   style={{ backgroundColor: item.color }}
// >

// </div>
// <div className="axis-card">{item.title}</div>
// </div>
