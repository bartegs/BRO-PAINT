import * as React from "react";
import { Draggable } from "react-beautiful-dnd";

import { Icon } from "../../../../../client/src/react/components/icons/Icon";

import type { OrderType } from "../../../../../../server/models/Order";

interface OwnProps {
  order: OrderType;
  index: number;
}

export function AwaitingOrderCard({ order, index }: OwnProps): JSX.Element {
  const { customerInfo, carInfo, orderDetails } = order;
  const { names } = customerInfo;
  const { licencePlate, model, make } = carInfo;
  const { orderNumber } = orderDetails;

  return (
    <Draggable draggableId={`${orderNumber}`} index={index}>
      {(provided) => (
        <div
          className="board__order order-card"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <div className="order-card__heading">
            <strong className="order-card__id">#{orderNumber}</strong>
          </div>
          <div className="order-card__car">
            <Icon icon="car" size="sm" />
            <span className="ml-2 mr-1">
              {make} {model}
            </span>
            <span>{licencePlate}</span>
          </div>
          <div className="order-card__client">
            <Icon icon="person" size="sm" />
            <span className="ml-2">{names}</span>
          </div>
        </div>
      )}
    </Draggable>
  );
}
