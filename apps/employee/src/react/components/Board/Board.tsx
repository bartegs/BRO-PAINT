import * as React from "react";

import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import { useLocation } from "react-router-dom";
import { EmployeeContext } from "../../contexts";

import { stageList } from "../../../../../assets/stages";
import { updateAwaitingOrders, updateOrders } from "./utils";

import type { Service, Stage } from "../../pages";
import type { SortedAwaitingOrdersType } from "../../../../../../server/controllers/awaitingOrders";

import { OrderCard } from "../OrderCard";
import { SortedOrdersType } from "../../../../../../server/controllers/orders";
import { AwaitingOrderCard } from "../AwaitingOrderCard";

type OwnProps = {
  stages: Service[] | Stage[];
  elements: SortedOrdersType | SortedAwaitingOrdersType;
};

export function Board({ stages, elements }: OwnProps): JSX.Element {
  const { ordersDispatch, awaitingOrdersDispatch } =
    React.useContext(EmployeeContext);
  const [isFormSubmitted, setIsFormSubmitted] = React.useState<boolean>(true);

  const { pathname } = useLocation();
  const isManagementOrderPage = pathname.includes("zarzadzanie-zleceniami");

  function handleOnDragEnd(result: DropResult) {
    if (!result.destination || !isFormSubmitted) {
      return;
    }

    const ordersCopy: SortedOrdersType = JSON.parse(JSON.stringify(elements));

    const { source, destination, draggableId } = result;
    const { droppableId: droppableIdFrom } = source;
    const { droppableId: droppableIdTo, index: positionInTargetColumn } =
      destination;

    const parsedDraggableId = Number(draggableId);
    const parsedDroppableIdFrom = Number(droppableIdFrom);
    const parsedDroppableIdTo = Number(droppableIdTo);

    if (isManagementOrderPage) {
      updateOrders(
        ordersDispatch,
        ordersCopy,
        parsedDroppableIdFrom,
        parsedDroppableIdTo,
        parsedDraggableId,
        positionInTargetColumn
      );
    } else {
      updateAwaitingOrders(
        awaitingOrdersDispatch,
        ordersCopy,
        droppableIdFrom,
        droppableIdTo,
        parsedDraggableId,
        positionInTargetColumn
      );
    }
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
                  {elements[columnId]?.map((order, index) => {
                    return isManagementOrderPage ? (
                      <OrderCard
                        order={order}
                        key={order._id}
                        index={index}
                        stageColor={color}
                        substageList={stageList[columnId as number]}
                        setIsFormSubmitted={setIsFormSubmitted}
                      />
                    ) : (
                      <AwaitingOrderCard
                        color={color}
                        key={order._id}
                        order={order}
                        index={index}
                        columnId={columnId as string}
                      />
                    );
                  })}
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
