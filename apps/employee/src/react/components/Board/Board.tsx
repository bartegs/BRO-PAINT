import * as React from "react";

import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import { useContext, useEffect } from "react";
import { insertToArrayAt } from "../../../../../common/utils/functions";
import { OrderCard } from "../OrderCard";
import type { Service, Stage } from "../../pages";
import { AppContext } from "../../contexts/AppContext";
import { SortedOrdersType } from "../../../../../../server/controllers/orders";

// ??? sorted by backended by stages before fetching and send in separate object of arrays

// const data: TasksType = {
//   0: [
//     {
//       id: "ec323888997",
//       orderNumber: 1,
//       carModel: "Fiat 126p",
//       clientName: "Pekinczyk Bartka",
//       licencePlate: "NLI2137",
//       orderMainStage: 0, // ??? for colums
//       orderSubStage: 3, // ?? for labels
//     },
//     {
//       id: "ec328808998",
//       orderNumber: 2,
//       carModel: "Fiat 000p",
//       clientName: "Kot Bartka",
//       licencePlate: "NLI0000",
//       orderMainStage: 0, // ??? for colums
//       orderSubStage: 3, // ?? for labels
//     },
//   ],
//   1: [
//     {
//       id: "ec328888997",
//       orderNumber: 3,
//       carModel: "Fiat 126p",
//       clientName: "Pekinczyk Bartka",
//       licencePlate: "NLI2137",
//       orderMainStage: 1, // ??? for colums
//       orderSubStage: 3, // ?? for labels
//     },
//     {
//       id: "ec324552555",
//       orderNumber: 4,
//       carModel: "Audi Bartka",
//       clientName: "Kot Barka",
//       licencePlate: "NLI0000",
//       orderMainStage: 1,
//       orderSubStage: 4,
//     },
//   ],
//   2: [
//     {
//       id: "ec32814444444",
//       orderNumber: 5,
//       carModel: "Fiat Bartka",
//       clientName: "Testowy Test",
//       licencePlate: "NLI1111",
//       orderMainStage: 2,
//       orderSubStage: 1,
//     },
//   ],
//   3: [
//     {
//       id: "ec32844484444",
//       orderNumber: 6,
//       carModel: "Syrena Bartka",
//       clientName: "Fifi Kowalski",
//       licencePlate: "NLI1111",
//       orderMainStage: 2,
//       orderSubStage: 1,
//     },
//   ],
//   4: [
//     {
//       id: "ec32844444444",
//       orderNumber: 7,
//       carModel: "Nowe Audi Bartka",
//       clientName: "Kasia Kowalska",
//       licencePlate: "NLI1111",
//       orderMainStage: 2,
//       orderSubStage: 1,
//     },
//   ],
// };

type OwnProps = {
  stages: Service[] | Stage[];
};
//
export function Board({ stages }: OwnProps): JSX.Element {
  const data = useContext(AppContext);

  const [orders, setOrders] = React.useState<SortedOrdersType>([]);

  useEffect(() => {
    setOrders(data);
  }, [data]);

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

    insertToArrayAt(
      ordersWithMatchingStageTo,
      positionInTargetColumn,
      splicedOrder
    );

    setOrders((prevState) => ({
      ...prevState,
      [parsedColumnIdFrom]: ordersWithMatchingStageFrom,
      [parsedColumnIdTo]: ordersWithMatchingStageTo,
    }));
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
                  const {
                    customerInfo,
                    carInfo,
                    orderDetails,
                    _id: id,
                  } = order;
                  const { names } = customerInfo;
                  const { licencePlate, model, make } = carInfo;
                  const { orderNumber } = orderDetails;
                  return (
                    <OrderCard
                      orderNumber={orderNumber}
                      carModel={model}
                      names={names}
                      licencePlate={licencePlate}
                      key={id}
                      make={make}
                      index={index}
                      stageColor={color}
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
