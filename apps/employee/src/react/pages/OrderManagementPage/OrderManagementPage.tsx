import * as React from "react";

import { Navbar } from "../../../../../common/react/components";
import { Board, NavPanel } from "../../components";
import { StageColor } from "../../../../../common/utils/types";

export interface Stage {
  id: number;
  color: StageColor;
  title: string;
}

const stages: Stage[] = [
  {
    id: 0,
    color: "grey",
    title: "Zlecenia przyjęte",
  },
  {
    id: 1,
    color: "green",
    title: "Prace przygotowawczo-blacharskie",
  },
  {
    id: 2,
    color: "blue",
    title: "Prace lakiernicze",
  },
  {
    id: 3,
    color: "pink",
    title: "Prace detailingowe",
  },
  {
    id: 4,
    color: "grey-dark",
    title: "Zlecenia ukończone",
  },
];

export function OrderManagementPage(): JSX.Element {
  return (
    <>
      <Navbar />
      <div className="content">
        <NavPanel />
        <Board stages={stages} />
      </div>
    </>
  );
}
