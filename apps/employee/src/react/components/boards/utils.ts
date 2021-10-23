import * as React from "react";

import type { SortedOrdersType } from "../../../../../../server/controllers/orders";
import type { SortedAwaitingOrdersType } from "../../../../../../server/controllers/awaitingOrders";

import { insertToArrayAt } from "../../../../../common/utils/functions";
import { host, token } from "../../../../../common/utils/contants";

export function sendUpdatedData(
  updatedData: {},
  collection: string,
  id: string
) {
  fetch(`${host}/${collection}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      ...updatedData,
    }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}

export function updateOrders(
  ordersDispatch: React.Dispatch<any>,
  ordersCopy: SortedOrdersType,
  columnIdFrom: number,
  columnIdTo: number,
  parsedDraggableOrderNumber: number,
  positionInTargetColumn: number
) {
  const ordersWithMatchingStageFrom = ordersCopy[columnIdFrom];
  const ordersWithMatchingStageTo = ordersCopy[columnIdTo];

  const draggingOrderIndex = ordersWithMatchingStageFrom.findIndex(
    ({ orderDetails }) =>
      orderDetails.orderNumber === parsedDraggableOrderNumber
  );

  const [splicedOrder] = ordersWithMatchingStageFrom.splice(
    draggingOrderIndex,
    1
  );

  const updatedSplicedOrder = {
    ...splicedOrder,
    orderDetails: {
      ...splicedOrder.orderDetails,
      stage: {
        sub: 0,
        main: columnIdTo,
      },
    },
  };
  const updatedSplicedOrderId = updatedSplicedOrder._id;

  insertToArrayAt(
    ordersWithMatchingStageTo,
    positionInTargetColumn,
    updatedSplicedOrder
  );

  ordersDispatch({
    type: "UPDATE_ORDER_STAGE",
    stageFrom: columnIdFrom,
    ordersWithMatchingStageFrom,
    stageTo: columnIdTo,
    ordersWithMatchingStageTo,
  });

  sendUpdatedData(updatedSplicedOrder, "orders", updatedSplicedOrderId);
}

export function updateAwaitingOrders(
  awaitingOrdersDispatch: React.Dispatch<any>,
  awaitingOrdersCopy: SortedAwaitingOrdersType,
  columnIdFrom: string,
  columnIdTo: string,
  parsedDraggableId: number,
  positionInTargetColumn: number
) {
  const ordersWithMatchingStage = awaitingOrdersCopy[columnIdFrom];

  const draggingOrderIndex = ordersWithMatchingStage.findIndex(
    ({ orderDetails }) => orderDetails.orderNumber === parsedDraggableId
  );

  const [splicedOrder] = ordersWithMatchingStage.splice(draggingOrderIndex, 1);

  insertToArrayAt(
    ordersWithMatchingStage,
    positionInTargetColumn,
    splicedOrder
  );

  awaitingOrdersDispatch({
    type: "UPDATE_ORDER_OF_AWAITING_ORDERS",
    columnId: columnIdFrom,
    awaitingOrders: ordersWithMatchingStage,
  });
}
