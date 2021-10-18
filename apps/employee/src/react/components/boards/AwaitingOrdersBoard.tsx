import * as React from "react";

import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import { EmployeeContext } from "../../contexts";

import { updateAwaitingOrders } from "./utils";

import type { Service } from "../../pages";
import type { SortedAwaitingOrdersType } from "../../../../../../server/controllers/awaitingOrders";

import { SortedOrdersType } from "../../../../../../server/controllers/orders";
import { AwaitingOrderCard } from "./components";

type OwnProps = {
  stages: Service[];
  awaitingOrders: SortedAwaitingOrdersType;
};

export function AwaitingOrdersBoard({
  stages,
  awaitingOrders,
}: OwnProps): JSX.Element {
  const { awaitingOrdersDispatch } = React.useContext(EmployeeContext);

  function handleOnDragEnd(result: DropResult) {
    if (!result.destination) {
      return;
    }

    const ordersCopy: SortedOrdersType = JSON.parse(
      JSON.stringify(awaitingOrders)
    );

    const { source, destination, draggableId } = result;
    const { droppableId: droppableIdFrom } = source;
    const { droppableId: droppableIdTo, index: positionInTargetColumn } =
      destination;

    const parsedDraggableId = Number(draggableId);

    updateAwaitingOrders(
      awaitingOrdersDispatch,
      ordersCopy,
      droppableIdFrom,
      droppableIdTo,
      parsedDraggableId,
      positionInTargetColumn
    );
  }

  return (
    <section className="board-page__board board">
      <DragDropContext onDragEnd={handleOnDragEnd}>
        {stages.map(({ id: columnId, title, color }) => {
          return (
            <Droppable key={columnId} droppableId={String(columnId)}>
              {(provided) => (
                <div
                  className={`board__column board__column--${color}`}
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  <div className="board__column-title">{title}</div>
                  {awaitingOrders[columnId]?.map((order, index) => (
                    <AwaitingOrderCard
                      color={color}
                      key={order._id}
                      order={order}
                      index={index}
                      columnId={columnId as string}
                    />
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          );
        })}
      </DragDropContext>
    </section>
  );
}
