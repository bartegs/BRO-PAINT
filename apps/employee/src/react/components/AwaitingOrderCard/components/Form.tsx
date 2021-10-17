import * as React from "react";

import type { StageColor } from "../../../../../../common/utils/types";

import { EmployeeContext } from "../../../contexts";

import { Buttons } from "../../OrderCard/components";

interface OwnProps {
  color: StageColor;
  cardId: string;
  columnId: string;
}

export function Form({ color, cardId, columnId }: OwnProps): JSX.Element {
  // delete from awaitingOrdersState / api and move to orders
  const { awaitingOrdersDispatch } = React.useContext(EmployeeContext);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    awaitingOrdersDispatch({
      type: "DELETE_AWAITING_ORDER",
      awaitingOrderId: cardId,
      columnId,
    });

    fetch(`http://localhost:3000/awaiting-orders/${cardId}?moveToOrders=true`, {
      method: "DELETE",
    })
      .then((resp) => console.log(resp))
      .catch((error) => console.log(error));
  }

  function handleReset(e: React.FormEvent) {
    e.preventDefault();

    awaitingOrdersDispatch({
      type: "DELETE_AWAITING_ORDER",
      awaitingOrderId: cardId,
      columnId,
    });

    fetch(`http://localhost:3000/awaiting-orders/${cardId}`, {
      method: "DELETE",
    })
      .then((resp) => console.log(resp))
      .catch((error) => console.log(error));
  }

  return (
    <form onSubmit={handleSubmit} onReset={handleReset} className="mt-2">
      <Buttons color={color} />
    </form>
  );
}
