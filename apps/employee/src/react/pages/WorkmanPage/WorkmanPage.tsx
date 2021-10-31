import * as React from "react";
import { useContext } from "react";
import { Navbar } from "../../../../../common/react/components";
import { WorkmanBoard } from "../../components";
import { Stage } from "../OrdersManagementPage";
import { EmployeeContext } from "../../contexts";

export function WorkmanPage(): JSX.Element {
  const { orders } = useContext(EmployeeContext);

  const stages: Stage[] = [
    {
      id: 0,
      color: "grey",
      title: "Do zrobienia",
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
      title: "Ukończone zadania",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="content">
        <WorkmanBoard stages={stages} orders={orders} />
      </div>
    </>
  );
}
