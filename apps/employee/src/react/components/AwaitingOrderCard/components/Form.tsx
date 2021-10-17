import * as React from "react";

import type { StageColor } from "../../../../../../common/utils/types";
import { host } from "../../../utils";

import { EmployeeContext } from "../../../contexts";

import { Buttons } from "../../OrderCard/components";
import { handleDeletingAwaitingOrders } from "./utils";

interface OwnProps {
  color: StageColor;
  cardId: string;
  columnId: string;
}

export function Form({ color, cardId, columnId }: OwnProps): JSX.Element {
  const { awaitingOrdersDispatch } = React.useContext(EmployeeContext);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    awaitingOrdersDispatch({
      type: "DELETE_AWAITING_ORDER",
      awaitingOrderId: cardId,
      columnId,
    });

    handleDeletingAwaitingOrders(
      `${host}/awaiting-orders/${cardId}?moveToOrders=true`
    );
  }

  function handleReset(e: React.FormEvent) {
    e.preventDefault();

    awaitingOrdersDispatch({
      type: "DELETE_AWAITING_ORDER",
      awaitingOrderId: cardId,
      columnId,
    });

    handleDeletingAwaitingOrders(`${host}/awaiting-orders/${cardId}`);
  }

  return (
    <form onSubmit={handleSubmit} onReset={handleReset} className="mt-2">
      <Buttons color={color} />
    </form>
  );
}
