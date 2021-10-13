import * as React from "react";

import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import { useContext } from "react";
import { insertToArrayAt } from "../../../../../common/utils/functions";
import { OrderCard } from "../OrderCard";
import type { Service, Stage } from "../../pages";
import { EmployeeContext } from "../../contexts/EmployeeContext";
import { SortedOrdersType } from "../../../../../../server/controllers/orders";
import { sendUpdatedData } from "./utils";
import { stageList } from "../../../../../assets/stages";

type OwnProps = {
  stages: Service[] | Stage[];
};

export function Board({ stages }: OwnProps): JSX.Element {
  const { orders, ordersDispatch } = useContext(EmployeeContext);

  function handleOnDragEnd(result: DropResult) {
    if (!result.destination) {
      return;
    }

    const ordersCopy: SortedOrdersType = JSON.parse(JSON.stringify(orders));

    const { source, destination, draggableId: draggableOrderNumber } = result;
    const { droppableId: columnIdFrom } = source;
    const { droppableId: columnIdTo, index: positionInTargetColumn } =
      destination;
    const parsedDraggableOrderNumber = Number(draggableOrderNumber);
    const parsedColumnIdFrom = Number(columnIdFrom);
    const parsedColumnIdTo = Number(columnIdTo);

    const ordersWithMatchingStageFrom = ordersCopy[parsedColumnIdFrom];
    const ordersWithMatchingStageTo = ordersCopy[parsedColumnIdTo];

    const draggingOrderIndex = ordersWithMatchingStageFrom.findIndex(
      ({ orderDetails }) =>
        orderDetails.orderNumber === parsedDraggableOrderNumber
    );

    const [splicedOrder] = ordersWithMatchingStageFrom.splice(
      draggingOrderIndex,
      1
    );

    // update main stage
    const updatedSplicedOrder = {
      ...splicedOrder,
      orderDetails: {
        ...splicedOrder.orderDetails,
        stage: {
          ...splicedOrder.orderDetails.stage,
          main: parsedColumnIdTo,
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
      stageFrom: parsedColumnIdFrom,
      ordersWithMatchingStageFrom,
      stageTo: parsedColumnIdTo,
      ordersWithMatchingStageTo,
    });

    sendUpdatedData(updatedSplicedOrder, "orders", updatedSplicedOrderId);
  }

  return (
    <section className="board-page__board board">
      <DragDropContext onDragEnd={handleOnDragEnd}>
        {stages.map(({ id: columnId, title, color }) => (
          <Droppable key={columnId} droppableId={String(columnId)}>
            {(provided) => (
              <div
                className={`board__column board__column--${color}`}
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                <div className="board__column-title">{title}</div>
                {orders[columnId]?.map((order, index) => {
                  return (
                    <OrderCard
                      order={order}
                      key={order._id}
                      index={index}
                      stageColor={color}
                      stage={stageList[columnId]}
                    />
                  );
                })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </DragDropContext>
    </section>
  );
}
