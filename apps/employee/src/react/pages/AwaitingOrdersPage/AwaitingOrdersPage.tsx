import * as React from "react";

import { useContext } from "react";

import type { BrandColor } from "../../../../../common/utils/types";

import { Navbar } from "../../../../../common/react/components";
import { Board, NavPanel } from "../../components";
import { EmployeeContext } from "../../contexts";

export interface Service {
  id: number | string;
  color: BrandColor;
  title: string;
}

export function AwaitingOrdersPage() {
  const { awaitingOrders } = useContext(EmployeeContext);

  const stages: Service[] = [
    {
      id: "60b51c927aad1a388c44f73d",
      color: "green",
      title: "Naprawa",
    },
    {
      id: "60b51caa7aad1a388c44f73e",
      color: "blue",
      title: "Malowanie",
    },
    {
      id: "60b51cb27aad1a388c44f73f",
      color: "pink",
      title: "Detailing",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="content">
        <NavPanel />
        <Board stages={stages} elements={awaitingOrders} />
      </div>
    </>
  );
}
