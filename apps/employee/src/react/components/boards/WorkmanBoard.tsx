import * as React from "react";

import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";

import type { Stage } from "../../pages";
import type { SortedOrdersType } from "../../../../../../server/controllers/orders";
import { stageList } from "../../../../../assets/stages";
import { TaskCard } from "./components";
import { EmployeeContext } from "../../contexts";

import { updateOrders } from "./utils";

type OwnProps = {
  stages: Stage[];
  orders: SortedOrdersType;
};

export function WorkmanBoard({ stages, orders }: OwnProps): JSX.Element {
  const { ordersDispatch } = React.useContext(EmployeeContext);

  function handleOnDragEnd(result: DropResult) {
    if (!result.destination) {
      return;
    }

    const ordersCopy: SortedOrdersType = JSON.parse(JSON.stringify(orders));

    const { source, destination, draggableId } = result;

    const { droppableId: droppableIdFrom } = source;
    const { droppableId: droppableIdTo, index: positionInTargetColumn } =
      destination;

    const parsedDraggableId = Number(draggableId);
    const parsedDroppableIdFrom = Number(droppableIdFrom);
    const parsedDroppableIdTo = Number(droppableIdTo);

    updateOrders(
      ordersDispatch,
      ordersCopy,
      parsedDroppableIdFrom,
      parsedDroppableIdTo,
      parsedDraggableId,
      positionInTargetColumn,
      true
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
                  {orders[columnId].map((order, index) => (
                    <TaskCard
                      key={order._id}
                      order={order}
                      index={index}
                      stageColor={color}
                      substageList={stageList[columnId]}
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
