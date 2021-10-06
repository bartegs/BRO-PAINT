import * as React from "react";
import { Navbar } from "../../../../../common/react/components";

import { Board, NavPanel } from "../../components";
import { BrandColor } from "../../../../../common/utils/types";

export interface Service {
  id: number;
  color: BrandColor;
  title: string;
}

export function NewOrders() {
  const stages: Service[] = [
    {
      id: 0,
      color: "green",
      title: "Naprawa",
    },
    {
      id: 1,
      color: "blue",
      title: "Malowanie",
    },
    {
      id: 2,
      color: "pink",
      title: "Detailing",
    },
  ];

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
